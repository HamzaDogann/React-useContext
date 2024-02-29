# useContext - Context API

## useContext Nedir?

`useContext`, React'te bir context'ten değer almak için kullanılan bir hooks'tur. Context, bileşen ağacı boyunca paylaşılan verileri yönetmeye yardımcı olur ve `useContext` bu değerlere erişimi kolaylaştırır.

## Ne Amaçla Kullanılır?

`useContext`, bileşenler arasında veri paylaşımını kolaylaştırır. Bir bileşenin içinde bulunduğu context'ten değer almasını sağlar, böylece bu değeri kullanabilir ve güncelleyebilir.

## Faydaları Nelerdir?

- **Daha Temiz Kod:** `useContext`, verilere erişimi temiz ve basit bir şekilde sağlar, böylece kodunuz daha okunabilir olur.
- **Daha Kolay Mantıksal Ayırma:** Bileşenler arasında veri paylaşımını kolaylaştırır, bu da uygulamanızdaki mantıksal ayırmanın artmasına yardımcı olur.
- **Global State Yönetimi:** Uygulama genelinde paylaşılan state'i yönetmek için kullanılabilir.

## Kullanım Örnekleri

- **Dark/Light Mode**
- **Kullanıcı Bilgisi**
- **Dil Seçimi**

## Karmaşık State Yönetimindeki Önemli Etkiler

### Daha Az Prop Drilling
`useContext`, prop drilling ihtiyacını azaltarak, karmaşık state yönetimini daha yönetilebilir hale getirir. Artık bir bileşenden diğerine değerlerinizi iletmek için her seferinde prop drilling yapmanıza gerek kalmaz.

### Modüler ve Bakımı Kolay Kod
Context kullanımı, state'i paylaşan bileşenleri daha modüler ve bakımı kolay hale getirir. Bu sayede, uygulamanızdaki bileşenler birbirinden bağımsız olabilir ve aynı context içindeki değerlere kolayca erişebilirler.

### Bileşen Bağımsızlığı
Bileşenler, kendi iç state'lerine sahip olabilir ve yine de paylaşılan bir state'e erişebilir. Bu özellik, bileşenlerin bağımsızlığını artırır ve her bir bileşeni tek başına düşünerek geliştirmeyi sağlar.

## Kullanım Şekli

```jsx
import { createContext } from 'react'; // React içinden createContext metodunu çağırıyoruz.
const MyContext = createContext(); // MyContext ismiyle bir Context yapısı kuruyoruz
```

 ```jsx
<div className="App"> 
      <MyContext.Provider value={{data, setData}}>
        <Header />
        <Article />
        <Footer />
      </MyContext.Provider>
    </div>
```

### Daha iyi anlayabilmek için App Componentinde yakaladığım bir veriyi bütün child componentlere paylaşmak için kullandığım bu repo üzerindeki projenin görsellerine göz atalım detaylı kod ve dökümanlara projeyi indirerek bakabilirsiniz.


![Ekran görüntüsü 2024-02-29 183454](https://github.com/HamzaDogann/React-useContext/assets/93007915/9e2f91af-1804-4c1d-858b-93835c3d9062)

