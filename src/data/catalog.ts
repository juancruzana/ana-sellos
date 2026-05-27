export interface Product {
  name: string
  category: string
  url: string
}

export interface Category {
  id: number
  name: string
}

export const CATEGORIES: Category[] = [
  { id:  1, name: 'Agendas' },
  { id:  2, name: 'Bolígrafos' },
  { id:  4, name: 'Bolsos y mochilas' },
  { id: 25, name: 'Hogar' },
  { id: 20, name: 'Indumentaria' },
  { id: 27, name: 'Llaveros' },
  { id: 24, name: 'Mujer - Belleza' },
  { id:  8, name: 'Oficina' },
  { id: 26, name: 'Pines - Medallas - Pads' },
  { id:  7, name: 'Tecnología' },
  { id: 22, name: 'Tiempo Libre' },
  { id: 23, name: 'Vino - Asado - Mate' },
]

export const products: Product[] = [
  // Pines - Medallas - Pads
  { name: 'Art. MCP-37',    category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_623_MCP_37.jpg' },
  { name: 'Art. MCP-35',    category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_622_MCP_35.jpg' },
  { name: 'Art. MCP-17',    category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_621_MCP_17.jpg' },
  { name: 'Art. MCP-15',    category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_620_MCP_15.jpg' },
  { name: 'Art. MCP-14',    category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_619_MCP_14.jpg' },
  { name: 'Art. MCP-13',    category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_618_MCP_13.jpg' },
  { name: 'Art. MCP-12',    category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_617_MCP_12.jpg' },
  { name: 'Art. MCP-11',    category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_616_MCP_11.jpg' },
  { name: 'Art. MCP-7',     category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_615_MCP_7.jpg' },
  { name: 'Art. MCP-6',     category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_614_MCP_6.jpg' },
  { name: 'Art. MCP-5',     category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_613_MCP_5.jpg' },
  { name: 'Art. MCP-4',     category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_612_MCP_4.jpg' },
  { name: 'Art. MCP-3',     category: 'Pines - Medallas - Pads', url: 'http://www.anaregalos.com.ar/files/products_images/list_611_MCP_3.jpg' },

  // Mujer - Belleza
  { name: 'Art. Set de Brochas 2186',       category: 'Mujer - Belleza', url: 'http://www.anaregalos.com.ar/files/products_images/list_610_SET_BROCHAS_2186.jpg' },
  { name: 'Art. Soporte Cartera 5172',      category: 'Mujer - Belleza', url: 'http://www.anaregalos.com.ar/files/products_images/list_609_MUJER_SOPORTE_CARTERA_5172.bmp' },
  { name: 'Art. Brocha con Accesorios 509', category: 'Mujer - Belleza', url: 'http://www.anaregalos.com.ar/files/products_images/list_608_MUJER_BROCHA_CON_ACCESORIOS_509.bmp' },
  { name: 'Art. Mini Brocha 477',           category: 'Mujer - Belleza', url: 'http://www.anaregalos.com.ar/files/products_images/list_607_MINI_BROCHA_447.jpg' },
  { name: 'Art. Lima Cristal 5510',         category: 'Mujer - Belleza', url: 'http://www.anaregalos.com.ar/files/products_images/list_606_LIMA_CRISTAL_5510.jpg' },

  // Vino - Asado - Mate
  { name: 'Art. Mate 70I',     category: 'Vino - Asado - Mate', url: 'http://www.anaregalos.com.ar/files/products_images/list_604_70_i_negro.jpg' },
  { name: 'Art. Mate 45B',     category: 'Vino - Asado - Mate', url: 'http://www.anaregalos.com.ar/files/products_images/list_603_45_b_negro_2.jpg' },
  { name: 'Art. Mate 35B',     category: 'Vino - Asado - Mate', url: 'http://www.anaregalos.com.ar/files/products_images/list_601_35_b_natural_2.jpg' },
  { name: 'Art. Mate Grabado', category: 'Vino - Asado - Mate', url: 'http://www.anaregalos.com.ar/files/products_images/list_600_30_i_negro_grabado.jpg' },
  { name: 'Art. Mate 1W',      category: 'Vino - Asado - Mate', url: 'http://www.anaregalos.com.ar/files/products_images/list_598_1w.jpg' },

  // Llaveros
  { name: 'Art. Llavero Cinta Estampada',    category: 'Llaveros', url: 'http://www.anaregalos.com.ar/files/products_images/list_596_LLAVEROS_CINTAS_ESTAMPADAS.jpg' },
  { name: 'Art. Llavero Cinta Bordada EA501', category: 'Llaveros', url: 'http://www.anaregalos.com.ar/files/products_images/list_595_LLAVEROS_CINTAS_BORDADAS_EA501.jpg' },
  { name: 'Art. Llavero Simil Cuero',        category: 'Llaveros', url: 'http://www.anaregalos.com.ar/files/products_images/list_592_LLAVERO_SIMIL_CUERO.jpg' },
  { name: 'Art. Llavero PVC Inyectado',      category: 'Llaveros', url: 'http://www.anaregalos.com.ar/files/products_images/list_590_LLAVERO_PVC_INYECTADO.jpg' },
  { name: 'Art. Llavero Plastisol',          category: 'Llaveros', url: 'http://www.anaregalos.com.ar/files/products_images/list_589_LLAVERO_PLASTISOL_1.jpg' },
  { name: 'Art. Llavero Metálico Oval 10',   category: 'Llaveros', url: 'http://www.anaregalos.com.ar/files/products_images/list_588_LLAVERO_METALICO_OVAL_10.jpg' },
]

export const categories = CATEGORIES.map(c => c.name)
