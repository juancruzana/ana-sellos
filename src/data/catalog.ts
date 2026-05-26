export interface Product {
  name: string
  category: string
  url: string
}

export const products: Product[] = [
  // PINES - MEDALLAS - PADS
  { name: 'Art. MCP-37',    category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_623_MCP_37.jpg' },
  { name: 'Art. MCP-35',    category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_622_MCP_35.jpg' },
  { name: 'Art. MCP-17',    category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_621_MCP_17.jpg' },
  { name: 'Art. MCP-15',    category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_620_MCP_15.jpg' },
  { name: 'Art. MCP-14',    category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_619_MCP_14.jpg' },
  { name: 'Art. MCP-13',    category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_618_MCP_13.jpg' },
  { name: 'Art. MCP-12',    category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_617_MCP_12.jpg' },
  { name: 'Art. MCP-11',    category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_616_MCP_11.jpg' },
  { name: 'Art. MCP-7',     category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_615_MCP_7.jpg' },
  { name: 'Art. MCP-6',     category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_614_MCP_6.jpg' },
  { name: 'Art. MCP-5',     category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_613_MCP_5.jpg' },
  { name: 'Art. MCP-4',     category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_612_MCP_4.jpg' },
  { name: 'Art. MCP-3',     category: 'PINES - MEDALLAS - PADS', url: 'http://www.anaregalos.com.ar/files/products_images/list_611_MCP_3.jpg' },

  // MUJER - BELLEZA
  { name: 'Art. Set de Brochas 2186',      category: 'MUJER - BELLEZA', url: 'http://www.anaregalos.com.ar/files/products_images/list_610_SET_BROCHAS_2186.jpg' },
  { name: 'Art. Soporte Cartera 5172',     category: 'MUJER - BELLEZA', url: 'http://www.anaregalos.com.ar/files/products_images/list_609_MUJER_SOPORTE_CARTERA_5172.bmp' },
  { name: 'Art. Brocha con Accesorios 509',category: 'MUJER - BELLEZA', url: 'http://www.anaregalos.com.ar/files/products_images/list_608_MUJER_BROCHA_CON_ACCESORIOS_509.bmp' },
  { name: 'Art. Mini Brocha 477',          category: 'MUJER - BELLEZA', url: 'http://www.anaregalos.com.ar/files/products_images/list_607_MINI_BROCHA_447.jpg' },
  { name: 'Art. Lima Cristal 5510',        category: 'MUJER - BELLEZA', url: 'http://www.anaregalos.com.ar/files/products_images/list_606_LIMA_CRISTAL_5510.jpg' },

  // VINO - ASADO - MATE
  { name: 'Art. Mate 70I',     category: 'VINO - ASADO - MATE', url: 'http://www.anaregalos.com.ar/files/products_images/list_604_70_i_negro.jpg' },
  { name: 'Art. Mate 45B',     category: 'VINO - ASADO - MATE', url: 'http://www.anaregalos.com.ar/files/products_images/list_603_45_b_negro_2.jpg' },
  { name: 'Art. Mate 35B',     category: 'VINO - ASADO - MATE', url: 'http://www.anaregalos.com.ar/files/products_images/list_601_35_b_natural_2.jpg' },
  { name: 'Art. Mate Grabado', category: 'VINO - ASADO - MATE', url: 'http://www.anaregalos.com.ar/files/products_images/list_600_30_i_negro_grabado.jpg' },
  { name: 'Art. Mate 1W',      category: 'VINO - ASADO - MATE', url: 'http://www.anaregalos.com.ar/files/products_images/list_598_1w.jpg' },

  // LLAVEROS
  { name: 'Art. Llavero Cinta Estampada',   category: 'LLAVEROS', url: 'http://www.anaregalos.com.ar/files/products_images/list_596_LLAVEROS_CINTAS_ESTAMPADAS.jpg' },
  { name: 'Art. Llavero Cinta Bordada EA501', category: 'LLAVEROS', url: 'http://www.anaregalos.com.ar/files/products_images/list_595_LLAVEROS_CINTAS_BORDADAS_EA501.jpg' },
  { name: 'Art. Llavero Simil Cuero',       category: 'LLAVEROS', url: 'http://www.anaregalos.com.ar/files/products_images/list_592_LLAVERO_SIMIL_CUERO.jpg' },
  { name: 'Art. Llavero PVC Inyectado',     category: 'LLAVEROS', url: 'http://www.anaregalos.com.ar/files/products_images/list_590_LLAVERO_PVC_INYECTADO.jpg' },
  { name: 'Art. Llavero Plastisol',         category: 'LLAVEROS', url: 'http://www.anaregalos.com.ar/files/products_images/list_589_LLAVERO_PLASTISOL_1.jpg' },
  { name: 'Art. Llavero Metálico Oval 10',  category: 'LLAVEROS', url: 'http://www.anaregalos.com.ar/files/products_images/list_588_LLAVERO_METALICO_OVAL_10.jpg' },
]

export const categories = [...new Set(products.map(p => p.category))]
