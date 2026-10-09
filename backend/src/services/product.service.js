import crypto from 'crypto';

/**
 * Servicio para la lógica de negocio de Productos.
 * Totalmente desacoplado de req/res de Express.
 */
class ProductService {
  constructor() {
    // Almacén en memoria inicial para propósitos de demostración
    this.products = [
      {
        id: 'prod-001',
        name: 'Laptop Gamer Ultraligera',
        description: 'Procesador de última generación, 32GB RAM, 1TB SSD',
        price: 1299.99,
        stock: 15,
        category: 'Computación',
        createdAt: new Date().toISOString()
      },
      {
        id: 'prod-002',
        name: 'Teclado Mecánico RGB',
        description: 'Switches táctiles silenciosos con conexión inalámbrica',
        price: 89.5,
        stock: 40,
        category: 'Accesorios',
        createdAt: new Date().toISOString()
      },
      {
        id: 'prod-003',
        name: 'Monitor Curvo 27"',
        description: 'Panel IPS 165Hz con resolución QHD',
        price: 319.0,
        stock: 8,
        category: 'Monitores',
        createdAt: new Date().toISOString()
      }
    ];
  }

  /**
   * Obtiene todos los productos con soporte de filtros opcionales.
   */
  async findAll({ category, search } = {}) {
    let result = [...this.products];

    if (category) {
      result = result.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const term = search.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
      );
    }

    return result;
  }

  /**
   * Obtiene un producto por su ID.
   */
  async findById(id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      const error = new Error(`Producto con ID '${id}' no encontrado`);
      error.statusCode = 404;
      throw error;
    }
    return product;
  }

  /**
   * Crea un nuevo producto.
   */
  async create({ name, description, price, stock, category }) {
    // Validación básica de campos requeridos
    if (!name || price === undefined || stock === undefined) {
      const error = new Error('Los campos name, price y stock son obligatorios');
      error.statusCode = 400;
      throw error;
    }

    if (typeof price !== 'number' || price < 0) {
      const error = new Error('El precio debe ser un número positivo');
      error.statusCode = 400;
      throw error;
    }

    if (typeof stock !== 'number' || stock < 0 || !Number.isInteger(stock)) {
      const error = new Error('El stock debe ser un número entero no negativo');
      error.statusCode = 400;
      throw error;
    }

    const newProduct = {
      id: `prod-${crypto.randomUUID().slice(0, 8)}`,
      name: name.trim(),
      description: description ? description.trim() : '',
      price,
      stock,
      category: category ? category.trim() : 'General',
      createdAt: new Date().toISOString()
    };

    this.products.push(newProduct);
    return newProduct;
  }

  /**
   * Actualiza un producto existente.
   */
  async update(id, updateData) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      const error = new Error(`Producto con ID '${id}' no encontrado`);
      error.statusCode = 404;
      throw error;
    }

    const current = this.products[index];

    if (updateData.price !== undefined && (typeof updateData.price !== 'number' || updateData.price < 0)) {
      const error = new Error('El precio debe ser un número positivo');
      error.statusCode = 400;
      throw error;
    }

    if (updateData.stock !== undefined && (typeof updateData.stock !== 'number' || updateData.stock < 0 || !Number.isInteger(updateData.stock))) {
      const error = new Error('El stock debe ser un número entero no negativo');
      error.statusCode = 400;
      throw error;
    }

    const updatedProduct = {
      ...current,
      ...updateData,
      id: current.id, // Preservar ID inmutable
      createdAt: current.createdAt,
      updatedAt: new Date().toISOString()
    };

    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  /**
   * Elimina un producto.
   */
  async delete(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      const error = new Error(`Producto con ID '${id}' no encontrado`);
      error.statusCode = 404;
      throw error;
    }

    const [deleted] = this.products.splice(index, 1);
    return deleted;
  }
}

// Instancia singleton para compartir estado en memoria durante el ciclo de vida de la aplicación
export const productService = new ProductService();
