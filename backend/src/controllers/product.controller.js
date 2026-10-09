import { productService } from '../services/product.service.js';

/**
 * Controlador de Productos.
 * Gestiona la capa HTTP (req, res, next) y delega al servicio correspondiente.
 */
class ProductController {
  /**
   * GET /api/v1/products
   */
  async getAll(req, res, next) {
    try {
      const { category, search } = req.query;
      const products = await productService.findAll({ category, search });
      return res.status(200).json({
        success: true,
        count: products.length,
        data: products
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/products/:id
   */
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productService.findById(id);
      return res.status(200).json({
        success: true,
        data: product
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/v1/products
   */
  async create(req, res, next) {
    try {
      const product = await productService.create(req.body);
      return res.status(201).json({
        success: true,
        message: 'Producto creado exitosamente',
        data: product
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/v1/products/:id
   */
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const updated = await productService.update(id, req.body);
      return res.status(200).json({
        success: true,
        message: 'Producto actualizado exitosamente',
        data: updated
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * DELETE /api/v1/products/:id
   */
  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await productService.delete(id);
      return res.status(200).json({
        success: true,
        message: 'Producto eliminado exitosamente',
        data: deleted
      });
    } catch (error) {
      next(error);
    }
  }
}

export const productController = new ProductController();
