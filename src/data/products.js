export const IMG = (id, w=900) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const IDS = [
  "1515886657613-9f3515b0c78f","1483985988355-763728e1935b","1485968579580-b6d095142e6e","1507003211169-0a1dd7228f2d",
  "1520975916090-3105956dac38","1552374196-1ab2a1c593e8","1469334031218-e382a71b716b","1618354691373-d851c5c3a990",
  "1539109136881-3be0616acf4b","1521572163474-6864f9cf17ab","1542291026-7eec264c27ff","1523275335684-37898b6baf30",
  "1553062407-98eeb64c6a62","1548036328-c9fa89d128fa","1591047139829-d91aecb6caea","1576566588028-4147f3842f27",
  "1620799140408-edc6dcb6d633","1614252369475-531eba835eb1","1496747611176-843222e1e57c","1518622358385-8ea7d0794bf6",
  "1524504388940-b1c1722653e1","1560243563-062bfc001d68","1551028719-00167b16eac5","1562157873-818bc0726f68",
  "1572804013309-59a88b7e92f1","1608231387042-66d1773070a5","1566174053879-31528523f8ae","1594633312681-425c7b97ccd1",
  "1600185365483-26d7a4cc7519","1543163521-1bf539c55dd2","1503342217505-b0a15ec3261c"
];
const img = (i) => IMG(IDS[i % IDS.length]);

const COLORS = {
  noir: '#0a0a0a', blanc: '#ffffff', beige: '#d8cfc4', marine: '#1f2a44',
  gris: '#9a9a9a', camel: '#b08d6a', rouge: '#9b2335', vert: '#2f4a3a',
  bleu: '#2563eb', jaune: '#eab308', argent: '#c0c0c0'
};

export const products = [
  // FEMME
  { id: 'w1', name: 'Robe midi fluide', category: 'women', price: 35000, salePrice: null, sizes: ['XS','S','M','L'], colors: ['noir','beige'], isNew: true, isBestSeller: true, stock: 12, images: [img(0), img(1), img(2)], description: 'Robe midi en tissu fluide, coupe élégante et intemporelle. Parfaite pour les soirées et occasions spéciales.' },
  { id: 'w2', name: 'Blazer croisé oversize', category: 'women', price: 52000, salePrice: 44000, sizes: ['S','M','L','XL'], colors: ['noir','marine'], isNew: false, isBestSeller: true, stock: 8, images: [img(3), img(4)], description: 'Blazer croisé oversize à la coupe structurée. Un essentiel du vestiaire moderne.' },
  { id: 'w3', name: 'Pantalon palazzo', category: 'women', price: 28000, salePrice: null, sizes: ['S','M','L'], colors: ['noir','gris','beige'], isNew: true, isBestSeller: false, stock: 15, images: [img(5), img(6)], description: 'Pantalon palazzo taille haute, fluide et confortable.' },
  { id: 'w4', name: 'Top satiné col V', category: 'women', price: 18000, salePrice: null, sizes: ['XS','S','M','L'], colors: ['blanc','noir','rouge'], isNew: false, isBestSeller: false, stock: 20, images: [img(7), img(8)], description: 'Top en satin avec col V profond, à porter seul ou sous une veste.' },
  { id: 'w5', name: 'Jupe plissée midi', category: 'women', price: 24000, salePrice: 19000, sizes: ['S','M','L'], colors: ['noir','marine'], isNew: false, isBestSeller: true, stock: 6, images: [img(9), img(10)], description: 'Jupe plissée midi, mouvement fluide et élégant.' },
  { id: 'w6', name: 'Manteau laine camel', category: 'women', price: 85000, salePrice: null, sizes: ['S','M','L'], colors: ['camel','gris'], isNew: true, isBestSeller: false, stock: 4, images: [img(11), img(12)], description: 'Manteau long en laine mélangée, couleur camel intemporelle.' },
  { id: 'w7', name: 'Chemise oversize blanche', category: 'women', price: 22000, salePrice: null, sizes: ['S','M','L','XL'], colors: ['blanc'], isNew: false, isBestSeller: true, stock: 18, images: [img(13), img(14)], description: 'Chemise oversize en coton, essentiel du quotidien.' },
  { id: 'w8', name: 'Robe courte soirée', category: 'women', price: 42000, salePrice: 36000, sizes: ['XS','S','M'], colors: ['noir','rouge'], isNew: true, isBestSeller: false, stock: 7, images: [img(15), img(16)], description: 'Robe courte de soirée avec détails raffinés.' },
  // HOMME
  { id: 'm1', name: 'Costume slim noir', category: 'men', price: 95000, salePrice: null, sizes: ['S','M','L','XL','XXL'], colors: ['noir','marine'], isNew: true, isBestSeller: true, stock: 5, images: [img(17), img(18)], description: 'Costume slim deux pièces, coupe moderne et élégante.' },
  { id: 'm2', name: 'Chemise oxford', category: 'men', price: 24000, salePrice: null, sizes: ['S','M','L','XL'], colors: ['blanc','bleu'], isNew: false, isBestSeller: true, stock: 22, images: [img(19), img(20)], description: 'Chemise oxford en coton, indispensable du vestiaire masculin.' },
  { id: 'm3', name: 'Pantalon chino', category: 'men', price: 26000, salePrice: 21000, sizes: ['S','M','L','XL'], colors: ['beige','noir','marine'], isNew: false, isBestSeller: false, stock: 14, images: [img(21), img(22)], description: 'Pantalon chino coupe droite, polyvalent et confortable.' },
  { id: 'm4', name: 'T-shirt premium', category: 'men', price: 12000, salePrice: null, sizes: ['S','M','L','XL','XXL'], colors: ['blanc','noir','gris'], isNew: true, isBestSeller: true, stock: 40, images: [img(23), img(24)], description: 'T-shirt en coton premium, coupe parfaite.' },
  { id: 'm5', name: 'Veste bomber', category: 'men', price: 48000, salePrice: null, sizes: ['S','M','L','XL'], colors: ['noir','vert'], isNew: true, isBestSeller: false, stock: 9, images: [img(25), img(26)], description: 'Veste bomber légère, style urbain et moderne.' },
  { id: 'm6', name: 'Pull col roulé', category: 'men', price: 30000, salePrice: 25000, sizes: ['S','M','L','XL'], colors: ['noir','gris','marine'], isNew: false, isBestSeller: false, stock: 11, images: [img(27), img(28)], description: 'Pull en maille fine col roulé, élégance discrète.' },
  { id: 'm7', name: 'Jean slim stretch', category: 'men', price: 32000, salePrice: null, sizes: ['S','M','L','XL'], colors: ['marine','noir'], isNew: false, isBestSeller: true, stock: 16, images: [img(29), img(30)], description: 'Jean slim en denim stretch, coupe ajustée.' },
  // ENFANT
  { id: 'k1', name: 'Ensemble fille', category: 'kids', price: 18000, salePrice: null, sizes: ['4A','6A','8A','10A'], colors: ['rose','blanc'], isNew: true, isBestSeller: true, stock: 15, images: [img(0), img(5)], description: 'Ensemble pour fille, confortable et stylé.' },
  { id: 'k2', name: 'Sweat garçon', category: 'kids', price: 14000, salePrice: 11000, sizes: ['4A','6A','8A','10A','12A'], colors: ['gris','marine'], isNew: false, isBestSeller: false, stock: 20, images: [img(2), img(7)], description: 'Sweat à capuche pour garçon.' },
  { id: 'k3', name: 'Robe enfant', category: 'kids', price: 16000, salePrice: null, sizes: ['4A','6A','8A'], colors: ['rouge','blanc'], isNew: true, isBestSeller: false, stock: 12, images: [img(3), img(8)], description: 'Robe légère pour petite fille.' },
  // ACCESSOIRES
  { id: 'a1', name: 'Sac à main cuir', category: 'accessories', price: 65000, salePrice: null, sizes: ['Unique'], colors: ['noir','camel'], isNew: true, isBestSeller: true, stock: 6, images: [img(10), img(11)], description: 'Sac à main en cuir véritable, design minimaliste.' },
  { id: 'a2', name: 'Ceinture cuir', category: 'accessories', price: 15000, salePrice: null, sizes: ['S','M','L'], colors: ['noir','camel'], isNew: false, isBestSeller: false, stock: 25, images: [img(12), img(13)], description: 'Ceinture en cuir avec boucle métallique.' },
  { id: 'a3', name: 'Écharpe laine', category: 'accessories', price: 18000, salePrice: 14000, sizes: ['Unique'], colors: ['gris','camel','noir'], isNew: false, isBestSeller: true, stock: 18, images: [img(14), img(15)], description: 'Écharpe en laine douce.' },
  { id: 'a4', name: 'Chaussures derby', category: 'accessories', price: 55000, salePrice: null, sizes: ['39','40','41','42','43','44'], colors: ['noir','marine'], isNew: true, isBestSeller: false, stock: 8, images: [img(16), img(17)], description: 'Chaussures derby en cuir, élégance classique.' },
  { id: 'a5', name: 'Sneakers minimalistes', category: 'accessories', price: 40000, salePrice: 34000, sizes: ['39','40','41','42','43','44'], colors: ['blanc','noir'], isNew: true, isBestSeller: true, stock: 10, images: [img(18), img(19)], description: 'Sneakers minimalistes en cuir blanc.' },
  { id: 'a6', name: 'Sac bandoulière', category: 'accessories', price: 38000, salePrice: null, sizes: ['Unique'], colors: ['noir','rouge'], isNew: false, isBestSeller: false, stock: 9, images: [img(20), img(21)], description: 'Sac bandoulière compact et fonctionnel.' },
  // Produits fictifs supplémentaires pour tests
  { id: 'w9', name: 'Veste en jean', category: 'women', price: 34000, salePrice: 27000, sizes: ['S','M','L'], colors: ['bleu','noir'], isNew: false, isBestSeller: false, stock: 0, images: [img(22), img(23)], description: 'Veste en jean coupe droite, style décontracté.' },
  { id: 'w10', name: 'Robe longue été', category: 'women', price: 29000, salePrice: null, sizes: ['XS','S','M','L'], colors: ['blanc','rouge','vert'], isNew: true, isBestSeller: false, stock: 11, images: [img(24), img(25)], description: 'Robe longue légère pour l\'été.' },
  { id: 'w11', name: 'Pull maille fine', category: 'women', price: 27000, salePrice: null, sizes: ['S','M','L'], colors: ['beige','gris','noir'], isNew: false, isBestSeller: true, stock: 13, images: [img(26), img(27)], description: 'Pull en maille fine, doux et chaud.' },
  { id: 'w12', name: 'Short taille haute', category: 'women', price: 16000, salePrice: 12000, sizes: ['XS','S','M','L'], colors: ['noir','beige'], isNew: false, isBestSeller: false, stock: 20, images: [img(28), img(29)], description: 'Short taille haute, coupe flatteuse.' },
  { id: 'm8', name: 'Parka imperméable', category: 'men', price: 62000, salePrice: null, sizes: ['M','L','XL','XXL'], colors: ['noir','vert'], isNew: true, isBestSeller: false, stock: 6, images: [img(30), img(0)], description: 'Parka imperméable avec capuche.' },
  { id: 'm9', name: 'Polo piqué', category: 'men', price: 19000, salePrice: 15000, sizes: ['S','M','L','XL'], colors: ['blanc','marine','rouge'], isNew: false, isBestSeller: true, stock: 25, images: [img(1), img(2)], description: 'Polo en piqué de coton.' },
  { id: 'm10', name: 'Bermuda cargo', category: 'men', price: 21000, salePrice: null, sizes: ['S','M','L','XL'], colors: ['beige','noir','vert'], isNew: false, isBestSeller: false, stock: 14, images: [img(3), img(4)], description: 'Bermuda cargo multi-poches.' },
  { id: 'm11', name: 'Mocassins cuir', category: 'men', price: 58000, salePrice: 49000, sizes: ['40','41','42','43','44'], colors: ['noir','camel'], isNew: true, isBestSeller: false, stock: 7, images: [img(5), img(6)], description: 'Mocassins en cuir souple.' },
  { id: 'k4', name: 'Doudoune enfant', category: 'kids', price: 22000, salePrice: null, sizes: ['4A','6A','8A','10A'], colors: ['rouge','marine','noir'], isNew: true, isBestSeller: true, stock: 10, images: [img(7), img(8)], description: 'Doudoune chaude pour l\'hiver.' },
  { id: 'k5', name: 'Pantalon jogging', category: 'kids', price: 12000, salePrice: 9000, sizes: ['4A','6A','8A','10A','12A'], colors: ['gris','noir','marine'], isNew: false, isBestSeller: false, stock: 18, images: [img(9), img(10)], description: 'Pantalon de jogging confortable.' },
  { id: 'k6', name: 'T-shirt imprimé', category: 'kids', price: 9000, salePrice: null, sizes: ['4A','6A','8A','10A'], colors: ['blanc','jaune','bleu'], isNew: true, isBestSeller: false, stock: 22, images: [img(11), img(12)], description: 'T-shirt avec imprimé ludique.' },
  { id: 'a7', name: 'Montre minimaliste', category: 'accessories', price: 45000, salePrice: null, sizes: ['Unique'], colors: ['noir','argent'], isNew: true, isBestSeller: true, stock: 5, images: [img(13), img(14)], description: 'Montre au design épuré.' },
  { id: 'a8', name: 'Lunettes de soleil', category: 'accessories', price: 28000, salePrice: 22000, sizes: ['Unique'], colors: ['noir','camel'], isNew: false, isBestSeller: false, stock: 12, images: [img(15), img(16)], description: 'Lunettes de soleil protection UV.' },
  { id: 'a9', name: 'Portefeuille cuir', category: 'accessories', price: 20000, salePrice: null, sizes: ['Unique'], colors: ['noir','camel'], isNew: false, isBestSeller: true, stock: 16, images: [img(17), img(18)], description: 'Portefeuille en cuir véritable.' },
  { id: 'a10', name: 'Bonnet laine', category: 'accessories', price: 8000, salePrice: null, sizes: ['Unique'], colors: ['noir','gris','rouge'], isNew: true, isBestSeller: false, stock: 30, images: [img(19), img(20)], description: 'Bonnet en laine douce.' },
  // Enfants supplémentaires (10+ articles)
  { id: 'k7', name: 'Ensemble sport enfant', category: 'kids', price: 15000, salePrice: 12000, sizes: ['4A','6A','8A','10A','12A'], colors: ['marine','gris','noir'], isNew: true, isBestSeller: true, stock: 14, images: [img(21), img(22)], description: 'Ensemble sport confortable pour enfant.' },
  { id: 'k8', name: 'Veste coupe-vent', category: 'kids', price: 18000, salePrice: null, sizes: ['4A','6A','8A','10A'], colors: ['rouge','bleu','vert'], isNew: false, isBestSeller: false, stock: 11, images: [img(23), img(24)], description: 'Veste coupe-vent légère.' },
  { id: 'k9', name: 'Robe de fête', category: 'kids', price: 20000, salePrice: 16000, sizes: ['4A','6A','8A'], colors: ['rouge','blanc'], isNew: true, isBestSeller: false, stock: 8, images: [img(25), img(26)], description: 'Robe de fête pour petite fille.' },
  { id: 'k10', name: 'Sneakers enfant', category: 'kids', price: 22000, salePrice: null, sizes: ['28','30','32','34','36'], colors: ['blanc','noir','rouge'], isNew: true, isBestSeller: true, stock: 12, images: [img(27), img(28)], description: 'Sneakers confortables pour enfant.' },
  { id: 'k11', name: 'Pyjama chaud', category: 'kids', price: 13000, salePrice: null, sizes: ['4A','6A','8A','10A'], colors: ['bleu','gris'], isNew: false, isBestSeller: false, stock: 16, images: [img(29), img(30)], description: 'Pyjama chaud et doux.' },
  { id: 'k12', name: 'Bonnet enfant', category: 'kids', price: 6000, salePrice: null, sizes: ['Unique'], colors: ['rouge','marine','gris'], isNew: true, isBestSeller: false, stock: 25, images: [img(0), img(1)], description: 'Bonnet en laine pour enfant.' },
];

export const categories = [
  { key: 'women', label: 'FEMME', img: img(1) },
  { key: 'men', label: 'HOMME', img: img(17) },
  { key: 'kids', label: 'ENFANT', img: img(0) },
  { key: 'accessories', label: 'ACCESSOIRES', img: img(10) },
];

export const colorMap = COLORS;
export const formatPrice = (n) => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA';