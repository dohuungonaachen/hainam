
export const menuItems = [
  {
    id: 'lunch1',
    groupId: 'lunch',
    order: 1,
    items: [
      {
        id: 'M1',
        price: '7,50',
        name: 'Pho Bo Suppe',
        description: 'traditional vietnamesische Reisbandnuldeln Suppe mit Rindfleisch, Rindfleischbällchen und frischem Kräutern',
        hint: 'A,W'
      },
      {
        id: 'M2',
        price: '6,90',
        name: 'Pho Chay Suppe',
        description: 'traditional vietnamesische Reisbandnuldeln Suppe mit Tofu und frischem Kräutern',
        vegan: true,
        hint: 'A,W'
      },
      {
        id: 'M3',
        price: '7,90',
        name: 'Bun Bo Hue Suppe',
        description: 'Hue Reisnuldeln Suppe mit Rindfleisch, Rindfleischbällchen, Zitronengras und frischem Kräutern',
        hint: 'A,W'
      },
      {
        id: 'M4',
        price: '7,50',
        name: 'Bun Chay Suppe',
        description: 'Reisnuldeln Suppe mit Tofu und frischem Kräutern',
        vegan: true,
        hint: 'A,W'
      },
      {
        id: 'M5',
        price: '5,90',
        name: 'Rau Xao Thap Cam',
        description: 'Gemüse im Wok mit dunkle Soße und Jasmin Reis',
        vegan: true,
        hint: 'L',
        upgrades: [{ id: 1, name: 'mit Tofu', price: '6,40' }]
      },
      {
        id: 'M6',
        price: '7,90',
        name: 'Bo Xao Dua',
        description: 'Rindfleisch mit Ananas, Wok Gemüse und Jasmin Reis'
      },
    ]
  },
  {
    id: 'lunch2',
    groupId: 'lunch',
    order: 2,
    items: [
      {
        id: 'M7',
        price: '6,90',
        name: 'Bun Cha Gio Chay',
        description: 'hausgemachte veg. Frühlingsrollen, gefüllt mit Glasnudeln, Salate, Röstzwiebel, Erdnuss, Fischsoße',
        vegan: true,
        hint: 'A,B,N,W',
        upgrades: [{ id: 1, name: 'mit Fleisch', price: '7,90' }]
      },
      {
        id: 'M8',
        price: '',
        name: 'Pho Xao',
        description: 'Gebratene Reisbandnudeln und frischem Gemüse',
        hint: 'B,I',
        upgrades: [
          { id: 'A', name: 'mit Gemüse', price: '6,50', vegan: true },
          { id: 'B', name: 'mit Tofu', price: '7,00', vegan: true, hint: 'L' },
          { id: 'C', name: 'mit Hähnchen oder Rindfleisch', price: '7,50' },
        ]
      },
      {
        id: 'M9',
        price: '7,90',
        name: 'Ga Xao Xa Ot',
        description: 'gebratene Hähnchen in Wok mit Zitronengras, Chilli, Karotte, Brokkoli, Blumenkohl '
      },
      {
        id: 'M10',
        price: '',
        name: 'Vietnamesisches Curry',
        description: 'vietnamesisches Curry mit frischem Gemüse, Zitronengras, Kräuter',
        upgrades: [
          { id: 'A', name: 'mit Tofu', price: '5,90', veggie: true, hint: 'L' },
          { id: 'B', name: 'mit Hähnchen', price: '7,90' },
          { id: 'C', name: 'mit Ente', price: '8,90' },
        ]
      },
    ]
  },
  {
    id: 'starters',
    groupId: 'starters',
    order: 1,
    items: [
      {
        id: '11',
        price: '3,90',
        name: 'Pagoda Rolls',
        description: 'Vegane Frühlingsrollen mit Gemüse, Süß-sauer-Dip ',
        portion: '2 Stk (hausgemacht)',
        hint: 'A,W',
        vegan: true
      },
      {
        id: '12',
        price: '6,90',
        name: 'Hoi An Frühlingsrolle Spezial',
        description: 'gebratene Hähnchen in Wok mit Zitronengras, Chilli, Karotte, Brokkoli, Blumenkohl ',
        hint: 'A,B,I,W'
      },
      {
        id: '13',
        price: '4,90',
        name: 'Nems Ha Noi',
        description: 'Frühlingsrollen mit Hähnchen, Frühlingszwiebel, Karotten, Morcheln, Glasnudeln, Nước mắm Dip',
        hint: 'A,B,I,W'
      },
      {
        id: '14',
        price: '5,90',
        name: 'Crispy Tofu',
        description: 'Seidentofu mit knusprigen Reisflocken, Knoblauch, Chilli',
        hint: 'A,B,I,W',
        vegan: true
      },
      {
        id: '15',
        price: '5,50',
        name: 'Honey Chicken',
        description: 'Chicken Wings nach vietnamesischer Art',
        hint: 'B',
        spicy: 1
      },
      {
        id: '16',
        price: '5,50',
        name: 'Pork BBQ',
        description: 'Schweinespieße nach vietnamesischer Art, Schnittlauch, Nước mắm Dip',
        hint: 'A,B,F,G,L,N,W',
        spicy: 1
      },
      {
        id: '17',
        price: '6,90',
        name: 'Epi-Tempura',
        description: 'Panierte Black-Tiger-Garnelen in grünen Reisflocken',
        hint: 'A,B,F,G,L,N,W',
      },
      {
        id: '18',
        price: '6,90',
        name: 'Cha ram ',
        description: 'Reispapier mit Schweinefleisch und Garnelen, mit hausgemachtem Dip',
        hint: 'A,B,F,G,L,N,W',
      },
    ]
  },
  {
    id: 'summertime_rolls',
    groupId: 'starters',
    order: 1,
    items: [
      {
        id: '21',
        price: '5,50',
        name: 'Buddha Rolls',
        description: 'Tofu | Reisfadennudeln | Tương đen Dip',
        portion: '2 Stk',
        hint: 'A,I,N,W',
        vegan: true
      },
      {
        id: '22',
        price: '6,50',
        name: 'Classic Summer Rolls',
        description: 'Sommersrollen gefüllt mit Hähchen, Garnelen, Salat, Reisfadennudeln in Reispapier mantel',
        portion: '2 Stk',
        hint: 'B,C',
      },
      {
        id: '23',
        price: '5,90',
        name: 'Beef Rolls',
        description: 'Sommersrollen gefüllt mit Rindfleisch, Salat, Reisfadennudeln in Reispapier mantel',
        portion: '2 Stk',
        hint: 'B,C',
      },
    ]
  },
  {
    id: 'salads',
    groupId: 'starters',
    order: 3,
    items: [
      {
        id: 'HA',
        price: '',
        name: 'Hoi An Summer',
        description: 'Grüne Papaya | Zwiebel | Karotten | vietnamesischer Kräuter | Erdnüsse | Krabbenchips',
        hint: 'A,W',
        upgrades: [
          { id: '30', name: 'Vegan', price: '6,50', vegan: true },
          { id: '31', name: 'mit Garnelen', price: '8,90' },
          { id: '32', name: 'mit Gegrilltes Hähnchen', price: '6,90', hint: 'B,C' },
        ]
      },
      {
        id: 'SG',
        price: '',
        name: 'Sai Gon Dream',
        description: 'Salat | Gurke | Karotten | vietnamesische Kräuter | Erdnüsse',
        hint: 'A,G,N',
        upgrades: [
          { id: '33', name: 'Vegan', price: '5,90', vegan: true },
          { id: '34', name: 'mit Rindfleisch', price: '6,90' },
          { id: '35', name: 'mit Hähnchenfleisch', price: '6,50', hint: '' },
          { id: '36', name: 'mit Garnelen', price: '6,90', hint: '' },
        ]
      },
    ]
  },
  {
    id: 'pho',
    groupId: 'soups',
    order: 1,
    showDescription: true,
    showSubtitle: true,
    items: [
      {
        id: '40',
        price: '10,90',
        name: 'Pho Bo',
        description: 'Rindfleisch | Rindfleischbällchen | Reisbandnudeln | frischen Kräuter',
        hint: 'B',
      },
      {
        id: '41',
        price: '10,50',
        name: 'Pho Chay',
        description: 'Tofu | Reisbandnudeln | Gemüse | frische Kräuter | vegane Brühe (auf Wunsch ohne Tofu und mit Gemüse)',
        vegan: true,
      },
    ]
  },
  {
    id: 'bunbohue',
    groupId: 'soups',
    order: 2,
    showDescription: true,
    showSubtitle: true,
    items: [
      {
        id: '42',
        price: '11,90',
        name: 'Bun Bo Hue',
        description: 'Rindfleisch | Rindfleischbällchen | Reisbandnudeln | Zitronengras | frischen Kräuter',
        hint: 'B',
        spicy: 1
      },
      {
        id: '43',
        price: '10,90',
        name: 'Bun Bo Hue Chay',
        description: 'Tofu | Reisbandnudeln | Gemüse | frische Kräuter | vegane Brühe (auf Wunsch ohne Tofu und mit Gemüse)',
        vegan: true,
        spicy: 1
      },
    ]
  },
  {
    id: 'special',
    groupId: 'main',
    order: 3,
    items: [
      {
        id: '61',
        price: '8,90',
        name: 'Veggie Pot',
        description: 'Tofu | Gemüse im Wok geschwenkt | Jasminreis',
        vegan: true,
        hint: 'A,I,W'
      },
      {
        id: '62',
        price: '9,50',
        name: 'Tofu Love',
        description: 'Tofu | Karotte | Süßkartoffeln | vietnamesisches Curry | Jasminreis',
        vegan: true,
        hint: 'L'
      },
      {
        id: '63',
        price: '11,50',
        name: 'Beef Bowl',
        description: 'Rindfleisch | Pakchoi | Brokkoli | Blumenkohl | Lauch | Jasminreis',
        hint: 'A,M,W'
      },
      {
        id: '64',
        price: '10,50',
        name: 'Beef Bowl',
        description: 'Hähnchen | Karotten | Süßkartoffeln | vietnamesisches Curry | Jasminreis',
        hint: 'A,M,W',
        upgrades: [
          { id: 'A', name: 'statt Hähnchenfleisch mit knuspriger Ente', price: '+4,00' },
          { id: 'B', name: 'statt Hähnchenfleisch mit Garnelen', price: '+5,00' },
          { id: 'C', name: 'statt Hähnchenfleisch mit Rindfleisch', price: '+1,50' },
          { id: 'D', name: 'mit Erdnusscurry', price: '+0,50' },
        ]
      },
      {
        id: '65',
        price: '10,90',
        name: 'Spicy Chicken',
        description: 'Hähnchen | Lauch | Brokkoli | Zwiebeln | hausgemachter Specialsoße | Jasminreis',
        hint: 'A,M,W',
        upgrades: [
          { id: 'A', name: 'statt Hähnchenfleisch mit knuspriger Ente', price: '+4,00' },
          { id: 'B', name: 'statt Hähnchenfleisch mit Garnelen', price: '+5,00' },
          { id: 'C', name: 'statt Hähnchenfleisch mit Rindfleisch', price: '+1,50' },
        ]
      },
      {
        id: '66',
        price: '15,90',
        name: 'Yummy Prawns',
        description: 'Garnelen | Karotten | Blumenkohl | Brokkoli | Kho quet Soße mit Schweinefleisch | Jasminreis ' +
          '(dazu empfelen wir einen trockenen Silvaner)',
        hint: 'B,C'
      },
      {
        id: '67',
        price: '14,90',
        name: 'Into the sea',
        description: 'Gabratenes Wolfsbarschfilet | vietnamesische Curry Soße | Jasminreis' +
          ' (dazu empfelen wir einen fruchtigen Bacchus)',
        hint: 'B,M'
      },
      {
        id: '68',
        price: '11,90',
        name: 'Pacific Times',
        description: 'Marinierte, gebratener Jasminreis | Tintenfisch | Garnelen | Karotten | Brokkoli | mit Beilagensuppe',
        hint: 'C,J,M',
        upgrades: [
          { id: 'A', name: 'statt Meeresfrüchte mit Tofu', price: '8,90' },
        ]
      },
      {
        id: '69',
        price: '25,90',
        name: 'Hoi An Spezialität',
        description: 'Knusprige Ente | Hähnchen | Schweinefleisch | Garnelen | Karotten | Süßkartoffel | vietnamesisches Curry | wird auf heißer Platte serviert',
        hint: 'A,N,B',
        recommended: true,
        upgrades: [
          { id: 'A', name: 'statt Meeresfrüchte mit Tofu', price: '8,90' },
        ]
      },
    ]
  },
  {
    id: 'bun',
    groupId: 'main',
    order: 1,
    showDescription: true,
    showSubtitle: false,
    items: [
      {
        id: '51', price: '10,50', name: 'Veggie Bowl', vegan: true,
        description: 'Angebratener Tofu | veg. Frühlingsrollen | vietnamesische Currysoße',
        hint: 'N,I,A,W'
      },
      {
        id: '52', price: '12,50', name: 'Wrapped Beef',
        description: 'Gahacktes Rindfleisch mit Pfefferblättern ummantelt | Nuoc Mam Soße',
        hint: 'B,I,J'
      },
      {
        id: '53', price: '12,90', name: `Nam Bo's Memories`,
        description: 'Angebratenes Rindfleisch | Frühlingsrollen | Nuoc Mam Soße',
        hint: 'B,N,A,W,I'
      },
      {
        id: '54', price: '11,50', name: `Bun Cha Ha Noi`,
        description: 'Marinierte Schweinefrikadellen | gegrillte Schweinebauchstreifen | Salat | Nuoc Mam Soße' +
          ' (Obamas Wahl bei seinem Vietnambesuch)',
        hint: 'W,K,I,N'
      },
      {
        id: '55', price: '12,50', name: `Taste of Hoi An`,
        description: 'Mariniertes Hähnchenfleisch | Frühlingsrollen | Nuoc Mam Soße',
        hint: 'B,N,A,W,I'
      },
      {
        id: '56', price: '11,90', name: `Sai Gon Bowl`,
        description: 'Gegrillte Schweinbauchstreifen | Frühlingsrollen | Nuoc Mam Soße',
        hint: 'B,F,N,A,W,I'
      },
      {
        id: '57', price: '14,90', name: `Cha Ca La Vong`,
        description: 'Gegrilltes Wolfbarschfillet | Dill | vietnamesische Currysoße',
        hint: 'B,N'
      },
      {
        id: '58', price: '18,90', name: `Hoi An Spezialität`, recommended: true,
        description: 'Gegrilltes Schweinfleisch | Hähnchenfleisch | Rindfleisch | Garnelen | Salat | Nuoc Mam Soße',
        hint: 'A,N,B'
      },
    ]
  },
  {
    id: 'desserts',
    groupId: 'desserts',
    order: 1,
    items: [
      {
        id: '82', price: '5,50', name: 'Banana Cocos Pearl',
        description: 'Gedämpfte Banane | Taro-Perle in Kokosnuss | exotische Pan Dang Duftblätter | Erdnüsse',
        hint: 'F,N'
      },
      {
        id: '83', price: '5,50', name: 'Che Ba Ba', subtitle: 'Typischer vietnamesischer Nachtisch',
        description: 'Jackfruit | Tapioca | Kokosmilch',
        hint: ''
      },
    ]
  },
  {
    id: 'wine',
    groupId: 'drinks',
    order: 1,
    items: [
      { id: '1', price: '13,35', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', price: '4,39', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'softdrinks',
    groupId: 'drinks',
    order: 2,
    items: [
      { id: '1', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'warmdrinks',
    groupId: 'drinks',
    order: 3,
    items: [
      { id: '1', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  }
]
