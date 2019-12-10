import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
private products: Product[] = [
new Product(1, "Tênis", "Category 1 - Sapatos", "Product 1 (Category 1)", 100, "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c68970dc89ee4217beb3a83a01259c66_9366/Tenis_X_PLR_Preto_CQ2405_01_standard.jpg"),
new Product(2, "Chuteira", "Category 1 - Sapatos", "Product 2 (Category 1)", 100, "https://lojaspompeia.vteximg.com.br/arquivos/ids/504038/111568-chuteira-umbro-campo-preto-vermelho-branco-lojas-pomepia-05.jpg?v=636723434016600000"),
new Product(3, "Sapato", "Category 1 - Sapatos", "Product 3 (Category 1)", 100, "https://lojavans.vteximg.com.br/arquivos/ids/246170-1000-1000/D3HY28-HERO.jpg?v=636905298674800000"),
new Product(4, "Bota", "Category 1 - Sapatos", "Product 4 (Category 1)", 100, "https://static.netshoes.com.br/produtos/bota-gonew-fenix-20/24/C62-1065-224/C62-1065-224_zoom1.jpg"),
new Product(5, "Chinelo", "Category 1 - Sapatos", "Product 5 (Category 1)", 100, "https://cea.vteximg.com.br/arquivos/ids/10338945-468-560/Chinelo-Masculino-Cartago-Azul-Marinho-9651808-Azul_Marinho_1.jpg?v=636984695669500000"),
new Product(6, "Raquete", "Category 2 - Acessorios", "Product 6 (Category 2)", 100, "https://static.prospin.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/3/232618-raquete-de-tenis-head-graphene-touch-radical-mp.jpg"),
new Product(7, "Bola de Basquete", "Category 2 - Acessorios", "Product 7 (Category 2)", 100, "https://images-americanas.b2w.io/produtos/01/00/sku/37015/0/37015044_1SZ.jpg"),
new Product(8, "Piscina", "Category 2 - Acessorios", "Product 8 (Category 2)", 100, "https://cdn.awsli.com.br/600x1000/430/430714/produto/37402321/piscina-de-fibra-paraiso-azul-744-m-x-420-m-x-140-m-36-000-litros-diazul-piscinas-8febf7de.jpg"),
new Product(9, "Apitos", "Category 2 - Acessorios", "Product 9 (Category 2)", 100, "https://www.mundodasbolas.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/p/apito_fox40_pearl_.jpg"),
new Product(10, "Tendas", "Category 2 - Acessorios", "Product 10 (Category 2)", 100, "https://img.elo7.com.br/product/zoom/1BBE011/tenda-com-almofadas-na-pronta-entrega-brincadeiras.jpg"),
new Product(11, "Medalha de Ouro", "Category 3 - Premiações", "Product 11 (Category 3)", 100, "https://static.lojaodosesportes.com.br/product_images/384x365/n/177/mini-ouro-1__65572.jpg"),
new Product(12, "Medalha de Bronze", "Category 3 - Premiações", "Product 12 (Category 3)", 100, "https://aesportiva.vteximg.com.br/arquivos/ids/252654-1000-1000/1_009570_0004.jpg?v=636761620035800000"),
new Product(13, "Medalha de Prata", "Category 3 - Premiações", "Product 13 (Category 3)", 100, "http://trofeuweb.com.br/media/catalog/product/cache/1/image/265x265/17f82f742ffe127f42dca9de82fb58b1/i/m/image_170.jpg"),
new Product(14, "Trofeu", "Category 3 - Premiações", "Product 14 (Category 3)", 100, "http://images.tcdn.com.br/img/img_prod/621757/trofeu_700436_do_74_1_20180413183342.jpg"),
new Product(15, "Premio", "Category 3 - Premiações", "Product 15 (Category 3)", 100, "https://confeb.liveuniversity.com/wp-content/uploads/sites/3/Pr%C3%AAmio-Confeb-2019-01-1.png"),
];
getProducts(): Observable<Product[]> {
return from([this.products]);
}
}

