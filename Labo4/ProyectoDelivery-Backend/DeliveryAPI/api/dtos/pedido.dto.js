class PedidoDto {
  id = 0;
  clienteId = 0;
  fecha_pedido = null;
  hora_entrada_pedido = null;
  hora_estimada_entrega = null;
  tipo_de_envio = "";
  estadosPedidoId = 0;
  forma_pago = "";
  monto_descuento = 0;
  createdAt = null;
  updatedAt = null;
}

module.exports = PedidoDto;
