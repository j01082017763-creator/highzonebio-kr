/**
 * HIGHZONE BIO - Unified Shopping Mall & Prescription Engine (v3.0)
 * Official Specialized Shopping Mall (http://shop.highzonebio.com)
 * R&D Center: 전주대학교 벤처창업관 산학협력 R&D 연구소 | 고객센터: 063-855-5001
 */

const HIGHZONE_PRODUCTS = {
    'grow-500': {
        id: 'grow-500',
        code: 'HZ-RX-01',
        name: '쑥쑥자라미2',
        engName: 'SSUK-SSUK JARAMI II · ALL-IN-ONE VITALITY',
        volume: '500ml',
        category: 'growth',
        categoryLabel: '초기 활력 · 생육 촉진',
        price: 22000,
        originalPrice: 28000,
        discountRate: 21,
        image: 'assets/prod_2.png',
        thumb: 'assets/prod_grow2.jpg',
        badges: ['특허 제10-2493517호', '유기농업자재 공시', '전작물 만능 활력제'],
        shortDesc: '식물 생장점 자극 및 엽록소 합성 극대화. 정식 초기 몸살 방지, 냉해·고온 스트레스 즉각 회복, 도시 텃밭부터 대농가까지 검증된 만능 영양 처방.',
        targetCrops: '고추, 토마토, 상추, 배추, 딸기, 오이, 과수류 및 베란다 엽채류 전 작물',
        dilution: {
            farm500L: '500ml (1병 전량 / 1,000배액)',
            knapsack20L: '20ml (뚜껑 약 1컵)',
            home1L: '1~2ml (티스푼 반 스푼)'
        },
        mechanism: [
            { step: 'STEP 01 · 이온화 흡수 (30분 내 침투)', desc: '초미세 나노 이온화 공법으로 기공과 뿌리 모세관을 통해 살포 후 30분 이내에 세포 내로 직접 흡수됩니다.' },
            { step: 'STEP 02 · 생장점 & 엽록소 활성화', desc: '천연 아미노산 킬레이트와 미량원소 복합체가 광합성 효율을 140% 끌어올려 잎을 두껍고 짙은 녹색으로 변화시킵니다.' },
            { step: 'STEP 03 · 환경 스트레스 방어막 구축', desc: '냉해·가뭄·일조부족 시 식물 체내 항산화 효소를 활성화하여 생육 정체를 빠르게 돌파합니다.' }
        ],
        goldenTime: '모종 정식 직후 뿌리 활착기 / 꽃눈 분화기 / 냉해·폭염 직후 수세 회복기 (7~10일 간격 엽면살포 또는 관주)',
        synergyId: 'dobok-100',
        synergyReason: '쑥쑥자라미2로 잎과 줄기 생장을 깨운 뒤 [제5원소 도복왕]을 혼용하면 웃자람 없이 마디가 굵고 단단하게 잡힙니다.',
        reviews: [
            { author: '김*곤 농가 (전북 김제 · 고추 1,200평)', rating: 5, date: '2026.09', text: '정식 후 냉해로 잎이 노래졌을 때 쑥쑥자라미2 한 번 치고 4일 만에 새순이 시커멓게 올라왔습니다. 이제 육묘 때부터 무조건 씁니다.' },
            { author: '박*연 고객 (서울 송파 · 베란다 수경텃밭)', rating: 5, date: '2026.10', text: '베란다 상추와 바질이 비실비실했는데 물 1L에 몇 방울 타서 주니 일주일 만에 마트 채소보다 아삭하고 튼튼해졌어요!' }
        ]
    },
    'redsol-500': {
        id: 'redsol-500',
        code: 'HZ-RX-02',
        name: '바이오레드졸',
        engName: 'BIO REDSOL · ROOT & SOIL DETOXIFIER',
        volume: '500ml',
        category: 'soil',
        categoryLabel: '연작장해 · 뿌리 활착',
        price: 28000,
        originalPrice: 35000,
        discountRate: 20,
        image: 'assets/prod_1.png',
        thumb: 'assets/prod_redsol.jpg',
        badges: ['3년 농가 실증 1위', '연작장해 염류 분해', '뿌리 세근 200% 폭발'],
        shortDesc: '만성 연작장해 토양의 불용성 염류를 영양분으로 전환하고, 썩어가는 뿌리에 산소와 길항 에너지를 공급하여 흰색 잔뿌리(세근)를 폭발적으로 발달시키는 하이존바이오 대표 시그니처 처방.',
        targetCrops: '시설하우스(토마토, 딸기, 참외, 오이, 고추), 마늘/양파, 인삼 및 연작 피해 노지 전 작물',
        dilution: {
            farm500L: '500ml~1,000ml (500~1,000배액 관주/엽면)',
            knapsack20L: '20~40ml (뚜껑 1~2컵)',
            home1L: '2ml (화분 토양 관주 시)'
        },
        mechanism: [
            { step: 'STEP 01 · 토양 고착 염류 및 가스 분해', desc: '연작 토양에 쌓인 인산염·황산염 등 불용성 염류 사슬을 끊어 작물이 즉시 흡수 가능한 이온 영양소로 전환합니다.' },
            { step: 'STEP 02 · 근권 유해균 억제 및 산소 공급', desc: '뿌리 주변 혐기성 부패 환경을 개선하여 시들음·뿌리썩음 원인을 차단하고 근권 미생물 활력을 복원합니다.' },
            { step: 'STEP 03 · 백색 세근(잔뿌리) 폭발 유도', desc: '새하얀 흡수근(세근)을 2배 이상 뻗게 하여 비료 흡수율과 후기 수확량을 극대화합니다.' }
        ],
        goldenTime: '정식 전 토양 처리 / 정식 후 초기 관주 / 장마철 과습 후 뿌리 세력 회복기 (10~14일 간격 관주 권장)',
        synergyId: 'inca-500',
        synergyReason: '바이오레드졸로 뿌리 세근을 틔운 뒤 [에이스 인카]의 칼슘·인산을 공급하면 과실 비대와 당도·경도가 동시에 완성됩니다.',
        reviews: [
            { author: '이*철 대표 (충남 부여 · 시설 방울토마토 8동)', rating: 5, date: '2026.10', text: '10년 연작 하우스라 염류집적이 심했는데 바이오레드졸 관주 2회 만에 흙이 부드러워지고 뽑아본 뿌리에 하얀 잔뿌리가 꽉 찼습니다.' },
            { author: '정*수 농가 (경남 창녕 · 대서마늘 3,000평)', rating: 5, date: '2026.08', text: '봄철 잎마름 오던 포장에 레드졸+인카 처방대로 넣고 평당 수확량이 25% 넘게 늘었습니다.' }
        ]
    },
    'dobok-100': {
        id: 'dobok-100',
        code: 'HZ-RX-03',
        name: '제5원소 도복왕',
        engName: '5TH ELEMENT DOBOK-WANG · CELL WALL SHIELD',
        volume: '100ml (고농축)',
        category: 'growth',
        categoryLabel: '도복 방지 · 줄기 경화',
        price: 15000,
        originalPrice: 20000,
        discountRate: 25,
        image: 'assets/prod_4.png',
        thumb: 'assets/prod_dobok.jpg',
        badges: ['초고농축 규소·칼슘 결합', '태풍·장마 쓰러짐 방지', '절간 단축·세포벽 강화'],
        shortDesc: '태풍·집중호우에도 쓰러지지 않는 강철 줄기 처방! 수용성 나노 규소와 이온 칼슘이 식물 세포벽을 벽돌처럼 단단하게 결합시켜 웃자람(도장)을 억제하고 마디를 굵고 짧게 만듭니다.',
        targetCrops: '벼(수도작), 고추, 마늘, 양파, 콩, 옥수수, 과수 신초 및 웃자라기 쉬운 모든 작물',
        dilution: {
            farm500L: '100ml 1병 (5,000배 초고농축 희석)',
            knapsack20L: '4ml (동봉 계량스포이드 2회)',
            home1L: '0.2ml (이쑤시개 끝 소량 / 2~3방울)'
        },
        mechanism: [
            { step: 'STEP 01 · 줄기 표피 규질화 (Silicification)', desc: '수용성 규소 이온이 줄기 표피층에 축적되어 물리적 강도를 높이고 곰팡이 균사의 침투를 원천 방어합니다.' },
            { step: 'STEP 02 · 웃자람(도장) 제어 및 절간 단축', desc: '질소 과잉이나 일조 부족으로 마디가 길어지는 현상을 잡아주고 줄기 직경을 굵게 키워줍니다.' },
            { step: 'STEP 03 · 이삭·과실 여묾(등숙률) 향상', desc: '줄기가 쓰러지지 않고 끝까지 양분을 올려보내 벼 천립중과 과실 구근 비대를 완성합니다.' }
        ],
        goldenTime: '벼 출수 25~30일 전 / 장마·태풍 예보 5~7일 전 / 시설작물 웃자람 발생 초기',
        synergyId: 'grow-500',
        synergyReason: '도복왕으로 세포벽을 단단히 다지면서 [쑥쑥자라미2]를 함께 주면 생육 저하 없이 튼튼한 다수확 체형이 만들어집니다.',
        reviews: [
            { author: '최*환 농가 (전북 익산 · 수도작 15,000평)', rating: 5, date: '2026.09', text: '가을 태풍 지나간 뒤 옆 논은 절반이 누웠는데 도복왕 친 우리 필지는 단 한 평도 안 쓰러지고 미질 등급도 특등 나왔습니다.' },
            { author: '강*석 농가 (전남 해남 · 겨울배추·마늘)', rating: 5, date: '2026.09', text: '100ml 한 병으로 500말(10,000평분 드론 방제)까지 가능해서 가성비가 진짜 최고입니다.' }
        ]
    },
    'goodbye-500': {
        id: 'goodbye-500',
        code: 'HZ-RX-04',
        name: '굿바이충',
        engName: 'GOODBYE-CHUNG · ECO PHYTONCIDE DEFENSE',
        volume: '500ml',
        category: 'pest',
        categoryLabel: '친환경 해충 기피 · 방어',
        price: 19000,
        originalPrice: 25000,
        discountRate: 24,
        image: 'assets/prod_5.png',
        thumb: 'assets/prod_goodbye.jpg',
        badges: ['잔류농약 ZERO', '수확 당일 살포 가능', '진딧물·총채·응애 기피'],
        shortDesc: '고농축 식물성 테르펜·피톤치드 추출물 기반으로 해충의 호흡기 교란 및 섭식 저해를 유도하는 무독성 친환경 방어제. 내성이 생기지 않으며 수확 직전이나 가정 실내에서도 안전합니다.',
        targetCrops: '딸기, 고추, 오이, 상추, 쌈채류, 화훼류 및 무농약·유기농 인증 농가 전 작물',
        dilution: {
            farm500L: '500ml~1,000ml (500~1,000배액)',
            knapsack20L: '20~40ml (잎 뒷면까지 골고루 살포)',
            home1L: '2ml (분무기에 희석하여 주 1~2회 살포)'
        },
        mechanism: [
            { step: 'STEP 01 · 천연 테르펜 기피 보호막 형성', desc: '식물 고유의 방어 물질인 테르펜·시네올 성분이 잎 표면에 코팅되어 해충의 접근과 산란을 차단합니다.' },
            { step: 'STEP 02 · 해충 외피 지질층 연화 및 섭식 중단', desc: '미세 해충(진딧물, 응애, 총채벌레, 가루이)의 기문을 물리적으로 덮어 활동을 즉시 멈추게 합니다.' },
            { step: 'STEP 03 · 농약 잔류 걱정 없는 안전 수확', desc: '화학적 합성농약 성분이 전혀 없어 연속 수확하는 과채류·쌈채류에 언제든 안심하고 사용할 수 있습니다.' }
        ],
        goldenTime: '해충 발생 초기(예방 시 7~10일 간격 / 발생 시 3~5일 간격 2회 연속 잎 뒷면 집중 살포)',
        synergyId: 'silver-500',
        synergyReason: '[굿바이충]으로 해충을 막고 [순수 은수용액 Ag]으로 곰팡이·세균까지 동시 방어하면 완벽한 무농약 이원 방제 시스템이 됩니다.',
        reviews: [
            { author: '윤*희 농가 (충남 논산 · 설향딸기 5동)', rating: 5, date: '2026.10', text: '수확 철에는 농약을 못 쳐서 응애·총채 때문에 골치 아팠는데 굿바이충은 꿀벌에도 안전하고 냄새도 상쾌해서 매주 칩니다.' },
            { author: '한*민 고객 (경기 분당 · 홈가드닝)', rating: 5, date: '2026.09', text: '아이 키우는 집이라 살충제 못 썼는데 화분 날파리랑 진딧물이 싹 사라졌어요!' }
        ]
    },
    'silver-500': {
        id: 'silver-500',
        code: 'HZ-RX-05',
        name: '순수 은수용액 (Ag)',
        engName: 'PURE COLLOIDAL SILVER Ag · 99.9% STERILIZATION',
        volume: '500ml',
        category: 'pest',
        categoryLabel: '병원균 살균 · 무름·탄저 예방',
        price: 25000,
        originalPrice: 32000,
        discountRate: 22,
        image: 'assets/prod_6.png',
        thumb: 'assets/prod_silver.jpg',
        badges: ['KTR 99.9% 항균 테스트 완료', '순도 99.99% 나노 콜로이드 은', '곰팡이·세균성 병해 예방'],
        shortDesc: '순도 99.99% 은(Ag)을 초미세 나노 이온 상태로 안정화한 고기능성 수용액. 작물 표면의 유해 곰팡이 포자와 세균의 산소 대사 효소를 불활성화하여 탄저·무름·흰가루·잿빛곰팡이를 친환경적으로 제어합니다.',
        targetCrops: '고추, 배추, 마늘, 양파, 딸기, 포도, 사과, 배, 인삼 및 수경재배 양액 라인 살균',
        dilution: {
            farm500L: '500ml (1,000배액 엽면살포)',
            knapsack20L: '20ml (뚜껑 1컵)',
            home1L: '1~2ml (잎 분무 및 수경재배 수조 소독)'
        },
        mechanism: [
            { step: 'STEP 01 · 유해균 세포막 전하 결합', desc: '나노 은(Ag+) 양이온이 음전하를 띤 병원성 세균·곰팡이 포자 세포막에 자석처럼 달라붙습니다.' },
            { step: 'STEP 02 · 호흡 효소 불활성화 (99.9% 제균)', desc: '병원균의 호흡 대사를 5분 내에 차단하여 약제 내성 없이 깔끔하게 사멸시킵니다.' },
            { step: 'STEP 03 · 수확 후 저장성(유통기한) 2배 연장', desc: '수확 전 살포 시 과실 표면의 부패균을 제거하여 저장 중 무름병과 곰팡이 발생을 획기적으로 줄입니다.' }
        ],
        goldenTime: '장마철 강우 전·후 24시간 이내 / 다습한 하우스 환기 불량기 / 수확 3~5일 전 저장성 강화 살포',
        synergyId: 'goodbye-500',
        synergyReason: '[순수 은수용액]으로 균(곰팡이·세균)을 잡고 [굿바이충]으로 해충 매개체를 잡으면 바이러스 전염 고리를 완벽히 끊을 수 있습니다.',
        reviews: [
            { author: '송*섭 농가 (경북 안동 · 노지고추 2,500평)', rating: 5, date: '2026.09', text: '올해 비가 그렇게 많이 왔는데도 비 그치자마자 은수용액 엽면살포해서 탄저병 피해 없이 마지막 물고추까지 다 땄습니다.' },
            { author: '오*진 대표 (경기 이천 · 스마트팜 유럽상추)', rating: 5, date: '2026.10', text: '수경재배 베드 뿌리썩음 예방이랑 잎 끝 무름 잡는 데 은수용액만한 게 없습니다.' }
        ]
    },
    'selenium-500': {
        id: 'selenium-500',
        code: 'HZ-RX-06',
        name: '셀레늄 수용액 (Se)',
        engName: 'ORGANIC IONIC SELENIUM Se · ANTIOXIDANT & BRIX',
        volume: '500ml',
        category: 'mineral',
        categoryLabel: '항산화 기능성 · 당도·착색',
        price: 26000,
        originalPrice: 33000,
        discountRate: 21,
        image: 'assets/prod_7.png',
        thumb: 'assets/prod_selenium.jpg',
        badges: ['고부가가치 셀레늄 농산물 인증용', '당도(Brix) +2~3 상승', '일소(햇빛데임)·노화 방지'],
        shortDesc: '세계보건기구(WHO)가 주목한 필수 항산화 미네랄 셀레늄(Se)을 식물이 100% 흡수할 수 있는 이온 수용액으로 구현. 과실의 당도와 착색을 극대화하고 셀레늄 기능성 브랜드 농산물 생산을 가능하게 합니다.',
        targetCrops: '사과, 배, 샤인머스캣, 복숭아, 딸기, 토마토, 수박, 참외, 블루베리, 쌈채류',
        dilution: {
            farm500L: '500ml (1,000배액 엽면살포 또는 관주)',
            knapsack20L: '20ml (뚜껑 1컵)',
            home1L: '1ml (과채류 착과 후 주 1회)'
        },
        mechanism: [
            { step: 'STEP 01 · 글루타치온 과산화효소(GPx) 활성화', desc: '여름철 강광·고온에 의한 활성산소를 제거하여 과실 일소(햇빛데임) 피해와 잎의 조기 노화를 막아줍니다.' },
            { step: 'STEP 02 · 당 전류 촉진 및 안토시아닌 착색', desc: '잎에서 만든 광합성 산물을 과실로 빠르게 이동시켜 당도(Brix)를 2~3도 높이고 선명한 빛깔을 발현시킵니다.' },
            { step: 'STEP 03 · 유기태 셀레늄 농축 (기능성 프리미엄)', desc: '수확된 과일·채소 내 천연 유기 셀레늄 함량을 높여 일반 농산물 대비 높은 출하 단가를 확보해 줍니다.' }
        ],
        goldenTime: '과실 비대 중기 ~ 착색기 ~ 수확 10일 전까지 (7~10일 간격 3~4회 살포 시 최고 품질 발현)',
        synergyId: 'germanium-500',
        synergyReason: '[셀레늄 수용액 Se]과 [게르마늄 수용액 Ge]을 교차 처방하면 백화점·수출용 최고급 항산화 기능성 농산물을 완성할 수 있습니다.',
        reviews: [
            { author: '배*호 농가 (경북 김천 · 샤인머스캣 1,800평)', rating: 5, date: '2026.10', text: '착색기부터 셀레늄 수용액 3번 쳤더니 당도가 20브릭스 넘게 나오고 알이 탱글탱글해서 공판장 최고가 찍었습니다.' }
        ]
    },
    'tomato-1000': {
        id: 'tomato-1000',
        code: 'HZ-RX-07',
        name: '건강한 항산화 토마토',
        engName: 'ANTIOXIDANT TOMATO SPECIAL FORMULA · 1000ml',
        volume: '1000ml (대용량)',
        category: 'crop',
        categoryLabel: '토마토 전용 · 열과·배꼽썩음 방지',
        price: 28000,
        originalPrice: 35000,
        discountRate: 20,
        image: 'assets/downloaded_28.jpg',
        thumb: 'assets/downloaded_28.jpg',
        badges: ['토마토 전용 맞춤 처방', '리코펜·당도 극대화', '배꼽썩음·열과 완벽 제어'],
        shortDesc: '대추방울토마토·완숙토마토 농가의 최대 고민인 배꼽썩음과(칼슘 결핍), 열과(갈라짐), 빈 화방 문제를 한 번에 해결하는 1,000ml 대용량 전용 바이오 처방제.',
        targetCrops: '대추방울토마토, 원형방울토마토, 완숙토마토, 스테비아토마토 원물 재배 농가',
        dilution: {
            farm500L: '500ml~1,000ml (500~1,000배액)',
            knapsack20L: '20~30ml',
            home1L: '2ml (베란다 방울토마토 화분 주 1회)'
        },
        mechanism: [
            { step: 'STEP 01 · 이동성 킬레이트 칼슘·붕소 직행 공급', desc: '생장점과 어린 과실 끝단까지 칼슘과 붕소를 막힘없이 전달하여 배꼽썩음과와 열과를 원천 차단합니다.' },
            { step: 'STEP 02 · 리코펜(Lycopene) 합성 및 화방 연속 착과', desc: '7화방 이후 세력이 떨어지는 후기에도 꽃떨이(낙화) 없이 붉고 단단한 과실을 연속 착과시킵니다.' },
            { step: 'STEP 03 · 과피 탄력 및 저장성 강화', desc: '유통 중 꼭지 마름과 물러짐을 방지하여 소비자 재구매율을 높여줍니다.' }
        ],
        goldenTime: '1화방 개화기부터 수확 종료 시까지 7~10일 간격 정기 관주 또는 엽면살포',
        synergyId: 'redsol-500',
        synergyReason: '[바이오레드졸]로 토마토 하우스 뿌리 세근을 유지하면서 [건강한 항산화 토마토]를 주면 수확 기간이 한 달 이상 연장됩니다.',
        reviews: [
            { author: '조*남 농가 (충남 논산 · 대추방울토마토 6동)', rating: 5, date: '2026.10', text: '여름 고온기마다 배꼽썩음과가 15%씩 나왔는데 올해 이 제품 쓰고 불량과가 1% 미만으로 줄었습니다.' }
        ]
    },
    'pepper-500': {
        id: 'pepper-500',
        code: 'HZ-RX-08',
        name: '건강한 항산화 고추',
        engName: 'ANTIOXIDANT PEPPER SPECIAL FORMULA · 500ml',
        volume: '500ml',
        category: 'crop',
        categoryLabel: '고추 전용 · 낙과방지·탄저저항',
        price: 22000,
        originalPrice: 28000,
        discountRate: 21,
        image: 'assets/downloaded_29.jpg',
        thumb: 'assets/downloaded_29.jpg',
        badges: ['고추 다수확 전용 처방', '석회결핍·총채·낙화 예방', '두꺼운 과피·선홍빛 건고추'],
        shortDesc: '고추 재배 전 주기에 맞춘 고농축 항산화 미네랄 포뮬러. 장마철 꽃떨이(낙화·낙과)와 칼슘 결핍(어깨빠짐)을 막고 과피를 두껍게 키워 건고추 근수를 확실하게 늘려줍니다.',
        targetCrops: '노지 건고추, 시설 청양고추, 꽈리고추, 파프리카, 피망',
        dilution: {
            farm500L: '500ml (1,000배액)',
            knapsack20L: '20ml (뚜껑 1컵)',
            home1L: '1~2ml (텃밭 고추 주 1회 엽면살포)'
        },
        mechanism: [
            { step: 'STEP 01 · 방아다리 분화 및 낙화 방지', desc: '개화기 수정 불량과 장마철 일조 부족으로 인한 꽃떨이 현상을 강력하게 제어합니다.' },
            { step: 'STEP 02 · 캡사이신·항산화 물질 증대 및 면역 강화', desc: '고추 자체의 면역 물질 생성을 도와 병해 저항성을 높이고 매콤달콤한 고품질 고추를 만듭니다.' },
            { step: 'STEP 03 · 과피 두께 및 건고추 수율 20% 향상', desc: '말렸을 때 껍질이 얇아지지 않고 색택이 선홍빛으로 살아나 건고추 무게(근수)가 월등히 많이 나갑니다.' }
        ],
        goldenTime: '첫 방아다리 개화 시점부터 수확기까지 10일 간격 엽면살포',
        synergyId: 'silver-500',
        synergyReason: '장마철 고추 농사의 성패는 탄저·무름 방어입니다. [순수 은수용액]과 함께 처방하면 끝물까지 깨끗하게 수확합니다.',
        reviews: [
            { author: '권*식 농가 (충북 괴산 · 청결고추 1,500평)', rating: 5, date: '2026.09', text: '말려보면 차이가 바로 납니다. 껍질이 두껍고 빛깔이 고와서 직거래 손님들이 올해 고추 최고라고 칭찬합니다.' }
        ]
    },
    'mushroom-1000': {
        id: 'mushroom-1000',
        code: 'HZ-RX-09',
        name: '버섯통통 영양제',
        engName: 'MUSHROOM TONG-TONG NUTRIENT · 1000ml',
        volume: '1000ml (대용량)',
        category: 'crop',
        categoryLabel: '버섯 전용 · 균사활력·증수',
        price: 25000,
        originalPrice: 32000,
        discountRate: 22,
        image: 'assets/downloaded_30.jpg',
        thumb: 'assets/downloaded_30.jpg',
        badges: ['버섯 균사 생장 특화', '갓 두께·대 탄력 강화', '2~3주기 수확량 유지'],
        shortDesc: '표고·느타리·새송이·양송이·상황버섯 등 버섯 균사체의 효소 활성을 극대화하여 자실체(버섯)를 빈틈없이 단단하고 통통하게 키워주는 버섯 농가 전용 1,000ml 영양제.',
        targetCrops: '표고버섯(배지/원목), 느타리버섯, 새송이버섯, 양송이버섯, 목이버섯 및 가정용 버섯 키트',
        dilution: {
            farm500L: '500ml~1,000ml (배지 침수 또는 관수)',
            knapsack20L: '20~40ml (균사 배양 후 발생기 살수)',
            home1L: '2ml (버섯 키트 분무용)'
        },
        mechanism: [
            { step: 'STEP 01 · 균사체 세포 분열 및 효소 활성 촉진', desc: '버섯 균사가 배지 내 리그닌·셀룰로오스를 빠르게 분해·흡수하도록 대사 에너지를 공급합니다.' },
            { step: 'STEP 02 · 자실체 조직 치밀화 (비중·무게 증가)', desc: '버섯 대가 속이 비지 않고 꽉 차며 갓이 두껍고 탄력 있게 자라 특품 비율을 높입니다.' },
            { step: 'STEP 03 · 후주기(2~4주기) 배지 세력 유지', desc: '1주기 수확 후 급격히 떨어지는 배지 영양을 보충하여 마지막 주기까지 높은 수확량을 보장합니다.' }
        ],
        goldenTime: '균사 배양 완료 후 원기 형성기 / 각 주기 수확 직후 휴양 관수 시',
        synergyId: 'coating-1000',
        synergyReason: '[수분잡아 버섯배지 코팅제]로 배지 수분 증발과 푸른곰팡이를 막고 [버섯통통 영양제]를 주면 수확량이 30% 이상 뛰어오릅니다.',
        reviews: [
            { author: '장*원 대표 (전남 장흥 · 표고배지 5동)', rating: 5, date: '2026.10', text: '3주기 넘어갈 때 버섯이 작아지던 게 버섯통통 쓰고 나서 1주기 못지않게 묵직하게 나옵니다.' }
        ]
    },
    'coating-1000': {
        id: 'coating-1000',
        code: 'HZ-RX-10',
        name: '수분잡아 버섯배지 코팅제',
        engName: 'MOISTURE-LOCK MUSHROOM SUBSTRATE COATING · 1000ml',
        volume: '1000ml (대용량)',
        category: 'crop',
        categoryLabel: '버섯배지 수분유지 · 잡균방어',
        price: 26000,
        originalPrice: 33000,
        discountRate: 21,
        image: 'assets/downloaded_31.jpg',
        thumb: 'assets/downloaded_31.jpg',
        badges: ['천연 고분자 통기성 보습막', '푸른곰팡이(트리코데르마) 억제', '배지 수명 연장'],
        shortDesc: '버섯 배지 표면에 숨 쉬는 천연 바이오 보습 코팅막을 형성하여 배지 내 수분 증발을 막고 외부 잡균(푸른곰팡이 등) 침투를 차단하는 혁신적인 배지 보호제.',
        targetCrops: '표고버섯 상면/전면 배지, 목이버섯 배지 및 건조 피해가 심한 육묘 상토',
        dilution: {
            farm500L: '1,000ml (500배액 배지 표면 코팅 살포)',
            knapsack20L: '40ml',
            home1L: '2ml'
        },
        mechanism: [
            { step: 'STEP 01 · 반투과성 바이오 보습막 형성', desc: '산소 호흡은 자유롭게 유지하면서 배지 내부의 수분이 마르는 현상을 70% 이상 감소시킵니다.' },
            { step: 'STEP 02 · 외부 유해 포자(푸른곰팡이) 차단', desc: '갈변기 및 탈봉 직후 취약한 배지 표면을 보호하여 오염률을 획기적으로 낮춥니다.' },
            { step: 'STEP 03 · 균일한 발이 및 기형버섯 감소', desc: '배지 내부 습도가 일정하게 유지되어 버섯이 고르고 예쁘게 올라옵니다.' }
        ],
        goldenTime: '배지 탈봉 직후 갈변기 / 주기 수확 후 배지 표면 건조 시',
        synergyId: 'mushroom-1000',
        synergyReason: '[수분잡아 코팅제]로 배지를 보호하고 [버섯통통 영양제]로 영양을 채우면 버섯 농가 완벽 세트가 됩니다.',
        reviews: [
            { author: '신*철 농가 (충남 청양 · 표고버섯)', rating: 5, date: '2026.09', text: '겨울철 난방기 틀면 배지가 바짝 말라서 고생했는데 코팅제 치고 나서 배지 무게가 끝까지 유지됩니다.' }
        ]
    },
    'inca-500': {
        id: 'inca-500',
        code: 'HZ-RX-11',
        name: '에이스 인카',
        engName: 'ACE IN-CA · IONIC PHOSPHORUS & CALCIUM',
        volume: '500ml',
        category: 'mineral',
        categoryLabel: '개화·착과 · 경도·저장성',
        price: 20000,
        originalPrice: 26000,
        discountRate: 23,
        image: 'assets/downloaded_35.jpg',
        thumb: 'assets/downloaded_35.jpg',
        badges: ['인산+칼슘 불용화 침전 해결', '화아분화·비대·착색 3중 효과', '무름방지·경도 강화'],
        shortDesc: '일반적으로 섞으면 돌처럼 굳어버리는 인산(P)과 칼슘(Ca)을 특수 킬레이트 이온 공법으로 한 병에 담아낸 하이존바이오의 핵심 기술 결정체. 꽃눈 분화부터 과실 단단함까지 책임집니다.',
        targetCrops: '사과, 배, 복숭아, 포도, 딸기, 토마토, 참외, 수박, 마늘, 양파, 배추 전 작물',
        dilution: {
            farm500L: '500ml (1,000배액)',
            knapsack20L: '20ml (뚜껑 1컵)',
            home1L: '1~2ml'
        },
        mechanism: [
            { step: 'STEP 01 · 침전 없는 인산·칼슘 동시 직행 흡수', desc: '식물 이동성이 가장 느린 칼슘을 인산 에너지와 결합시켜 잎과 과실 끝까지 빠르게 도달시킵니다.' },
            { step: 'STEP 02 · 우량 화아분화 및 수정률 극대화', desc: '꽃눈을 충실하게 만들고 생식생장 전환을 도와 기형과를 줄이고 정형과 비율을 높입니다.' },
            { step: 'STEP 03 · 세포벽 펙틴 결합으로 과실 경도 향상', desc: '과육을 아삭하고 단단하게 만들어 수확 후 물러짐과 열과를 완벽히 예방합니다.' }
        ],
        goldenTime: '개화 전 화아분화기 / 착과 직후 세포분열기 / 수확 2~3주 전 경도·당도 향상기',
        synergyId: 'redsol-500',
        synergyReason: '[바이오레드졸] + [에이스 인카]는 하이존바이오 전국 농가 재구매율 1위 골든 시너지 조합입니다.',
        reviews: [
            { author: '류*현 농가 (전남 나주 · 신고배 3,500평)', rating: 5, date: '2026.10', text: '에이스 인카 3번 친 배는 저장고에서 봄까지 꺼내도 아삭함이 그대로 살아있습니다.' }
        ]
    },
    'germanium-500': {
        id: 'germanium-500',
        code: 'HZ-RX-12',
        name: '게르마늄 수용액 (Ge)',
        engName: 'ORGANIC GERMANIUM Ge · CELL OXYGENATOR',
        volume: '500ml',
        category: 'mineral',
        categoryLabel: '산소공급 · 면역·고기능성',
        price: 35000,
        originalPrice: 45000,
        discountRate: 22,
        image: 'assets/downloaded_36.jpg',
        thumb: 'assets/downloaded_36.jpg',
        badges: ['수용성 유기 게르마늄 이온', '뿌리 산소 공급 · 연작지 활력', '프리미엄 약용·과수 특화'],
        shortDesc: '기적의 원소라 불리는 유기 게르마늄(Ge)을 초미세 수용액화하여 식물 세포 내 산소 공급을 극대화하고 자가 면역력을 최고조로 끌어올리는 최고급 기능성 미네랄 처방제.',
        targetCrops: '인삼, 산양삼, 도라지, 더덕, 블루베리, 체리, 사과, 샤인머스캣, 멜론 등 고소득 특용·과수 작물',
        dilution: {
            farm500L: '500ml (1,000배액)',
            knapsack20L: '20ml',
            home1L: '1ml'
        },
        mechanism: [
            { step: 'STEP 01 · 식물 세포 내 산소 전달 촉진', desc: '과습이나 연작으로 산소가 부족해진 뿌리 세포에 산소 대사를 활성화하여 뿌리 썩음을 막습니다.' },
            { step: 'STEP 02 · 사포닌·폴리페놀 등 유효성분 증폭', desc: '약용작물과 과실류의 파이토케미컬 함량과 고유의 깊은 풍미·향기를 극대화합니다.' },
            { step: 'STEP 03 · 게르마늄 인증 브랜드 농산물 생산', desc: '고함량 유기 게르마늄 축적을 통해 백화점 납품 및 프리미엄 직거래 경쟁력을 부여합니다.' }
        ],
        goldenTime: '생육 중기 ~ 비대 성숙기 (10~14일 간격 3회 이상 관주 또는 엽면살포)',
        synergyId: 'selenium-500',
        synergyReason: '[게르마늄 수용액 Ge]과 [셀레늄 수용액 Se]을 함께 사용하면 최고급 항산화·면역 투톱 처방이 완성됩니다.',
        reviews: [
            { author: '홍*표 농가 (충남 금산 · 6년근 인삼)', rating: 5, date: '2026.09', text: '게르마늄 수용액 쓰고 인삼 뇌두가 튼실하고 황증 없이 백삼 품질이 최상으로 나왔습니다.' }
        ]
    },
    'magnesium-500': {
        id: 'magnesium-500',
        code: 'HZ-RX-13',
        name: '마그네슘 수용액 (Mg)',
        engName: 'IONIC MAGNESIUM Mg · CHLOROPHYLL CORE ENGINE',
        volume: '500ml',
        category: 'mineral',
        categoryLabel: '엽록소 핵 · 황화현상 즉각치료',
        price: 24000,
        originalPrice: 30000,
        discountRate: 20,
        image: 'assets/downloaded_37.jpg',
        thumb: 'assets/downloaded_37.jpg',
        badges: ['엽록소 중심핵 필수 미네랄', '하위엽 황화(노란잎) 3일 내 복원', '일조부족 광합성 보완'],
        shortDesc: '식물 엽록소의 중심 원소인 마그네슘(Mg, 고토)을 즉시 흡수형 이온 수용액으로 처방. 잎맥 사이가 노랗게 변하는 황화 현상을 빠르게 복구하고 흐린 날에도 광합성 효율을 유지시킵니다.',
        targetCrops: '시설 과채류(토마토, 오이, 고추, 딸기), 감귤, 사과, 포도 및 잎이 노래지는 모든 원예·화훼 작물',
        dilution: {
            farm500L: '500ml (1,000배액 엽면살포)',
            knapsack20L: '20ml',
            home1L: '1~2ml (노란 잎 화분 응급 처방)'
        },
        mechanism: [
            { step: 'STEP 01 · 엽록소(Chlorophyll) 즉각 재합성', desc: '살포 후 잎 기공으로 즉시 흡수되어 노랗게 탈색된 잎을 3~5일 내에 짙은 녹색으로 되돌립니다.' },
            { step: 'STEP 02 · 인산(P) 이동 매개 및 에너지(ATP) 생성', desc: '식물 체내에서 인산 성분을 열매와 뿌리로 실어 나르는 기관차 역할을 수행합니다.' },
            { step: 'STEP 03 · 겨울·장마철 일조량 부족 극복', desc: '빛이 약한 환경에서도 광합성 수율을 극대화하여 착과 불량과 수세 저하를 막아줍니다.' }
        ],
        goldenTime: '하위엽 잎맥 사이가 노래지는 고토 결핍 초기 / 착과 비대기(마그네슘 소모 급증기) / 장마·동절기 일조 부족 시',
        synergyId: 'inca-500',
        synergyReason: '[마그네슘 수용액 Mg]은 인산의 이동을 돕기 때문에 [에이스 인카]와 교차 살포하면 흡수율이 2배로 높아집니다.',
        reviews: [
            { author: '양*모 농가 (제주 서귀포 · 하우스 감귤)', rating: 5, date: '2026.10', text: '열매 달리고 나서 잎이 누렇게 뜨던 게 마그네슘 수용액 한 번 치니 시금치처럼 진해졌습니다.' }
        ]
    },
    'blackhole-1000': {
        id: 'blackhole-1000',
        code: 'HZ-RX-14',
        name: '바이오 블랙홀',
        engName: 'BIO BLACKHOLE · FULVIC & HUMIC SOIL CONDITIONER',
        volume: '1000ml (대용량)',
        category: 'soil',
        categoryLabel: '토양 떼알구조 · 보비력 극대화',
        price: 32000,
        originalPrice: 40000,
        discountRate: 20,
        image: 'assets/downloaded_40.jpg',
        thumb: 'assets/downloaded_40.jpg',
        badges: ['천연 풀빅산·휴믹산 고농축', '단단한 토양 떼알구조 복원', '비료 유실 방지·양이온치환(CEC) 증대'],
        shortDesc: '블랙홀처럼 토양 속 잠자고 있는 영양분을 끌어당겨 작물 뿌리에 전달하는 고농축 풀빅산·휴믹산 유기 바이오 토양개량제(1,000ml). 딱딱하게 굳은 땅을 스펀지처럼 부드럽게 바꿉니다.',
        targetCrops: '연작 하우스 토양, 간척지·마사토 등 척박한 노지, 과수원, 마늘·양파·감자·고구마 구근류 전 작물',
        dilution: {
            farm500L: '500ml~1,000ml (관주 처리)',
            knapsack20L: '20~40ml',
            home1L: '2ml (분갈이 후 또는 오래된 화분 흙 재생)'
        },
        mechanism: [
            { step: 'STEP 01 · 토양 입단화(떼알구조) 형성', desc: '진흙처럼 굳거나 모래처럼 빠지는 토양 입자를 뭉쳐 통기성과 보수력을 동시에 확보합니다.' },
            { step: 'STEP 02 · 천연 킬레이트 영양 블랙홀 작용', desc: '풀빅산 저분자 유기산이 토양 내 미량원소를 킬레이트화하여 비료 효율을 50% 이상 높입니다.' },
            { step: 'STEP 03 · 지온 상승 및 유익 미생물 증식 터전 제공', desc: '근권 유익균의 먹이가 되어 건강한 생태 토양을 빠르게 재건합니다.' }
        ],
        goldenTime: '밑거름 시비 및 로터리 전·후 / 정식 직후 관주 / 생육 중기 추비 관주 시 혼용',
        synergyId: 'goldwater-1000',
        synergyReason: '[바이오 블랙홀]로 흙의 그릇을 넓히고 [황금수 프리미엄]으로 황금빛 생명 에너지를 채우면 죽은 땅도 옥토로 살아납니다.',
        reviews: [
            { author: '문*석 농가 (전북 고창 · 황토 호박고구마 5,000평)', rating: 5, date: '2026.09', text: '비 오면 질척거리고 마르면 돌덩이 같던 땅에 블랙홀 관주했더니 호미가 쑥쑥 들어가고 고구마 모양이 예술로 빠졌습니다.' }
        ]
    },
    'goldwater-1000': {
        id: 'goldwater-1000',
        code: 'HZ-RX-15',
        name: '황금수 프리미엄',
        engName: 'GOLDEN WATER PREMIUM · BIO ENZYME ELIXIR',
        volume: '1000ml (대용량)',
        category: 'growth',
        categoryLabel: '복합 효소 · 최고급 종합영양',
        price: 30000,
        originalPrice: 38000,
        discountRate: 21,
        image: 'assets/downloaded_41.jpg',
        thumb: 'assets/downloaded_41.jpg',
        badges: ['복합 생리활성 효소 + 아미노산', '대농가 1,000ml 가성비 끝판왕', '뿌리·잎·열매 전방위 올라운더'],
        shortDesc: '하이존바이오 발효 효소 공학과 나노 미네랄 기술을 결합한 1,000ml 대용량 프리미엄 종합 활력제. 작물 생육 초기부터 수확기까지 전 주기에 걸쳐 폭발적인 생장 에너지와 다수확을 선사합니다.',
        targetCrops: '시설·노지 원예작물, 수도작(벼), 과수류, 구근류, 엽채류 전 작물 올라운드 사용',
        dilution: {
            farm500L: '500ml~1,000ml (500~1,000배액 관주/엽면)',
            knapsack20L: '20~40ml',
            home1L: '2ml'
        },
        mechanism: [
            { step: 'STEP 01 · 고활성 효소 + 필수 아미노산 18종 즉각 공급', desc: '식물이 스스로 합성하는 데 소모되는 에너지를 아껴 과실 비대와 뿌리 발육에 집중시킵니다.' },
            { step: 'STEP 02 · 양분 전환율 및 비료 흡수율 극대화', desc: '기존 관주 비료와 함께 줄 경우 비료 흡수 효율을 배가시키고 염류 집적을 예방합니다.' },
            { step: 'STEP 03 · 수확량 증대 및 상품과 비율 95% 달성', desc: '크기·무게·당도·색택 등 농산물 등급을 결정짓는 4대 지표를 동시에 끌어올립니다.' }
        ],
        goldenTime: '정식 후 활착기부터 수확 종료 시까지 10~14일 간격 상시 관리용',
        synergyId: 'blackhole-1000',
        synergyReason: '[황금수 프리미엄]과 [바이오 블랙홀]은 대농가에서 가장 많이 세트로 주문하는 1,000ml 대용량 듀오입니다.',
        reviews: [
            { author: '임*태 농가 (경북 성주 · 참외 하우스 12동)', rating: 5, date: '2026.08', text: '황금수 프리미엄은 이름값 그대로입니다. 참외 골이 선명하고 노란 황금빛이 돌아서 공판장 경매사들이 먼저 찾습니다.' }
        ]
    },
    'synergy-redsol-inca': {
        id: 'synergy-redsol-inca',
        code: 'HZ-SET-01',
        name: '바이오레드졸 + 에이스 인카 시너지 세트',
        engName: 'GOLDEN SYNERGY DUO · REDSOL + ACE IN-CA',
        volume: '500ml × 2병 세트',
        category: 'synergy',
        categoryLabel: '농가 재구매 1위 시너지 패키지',
        price: 43000,
        originalPrice: 48000,
        discountRate: 10,
        image: 'assets/prod_1.png',
        thumb: 'assets/prod_redsol.jpg',
        badges: ['세트 특별할인 -5,000원', '뿌리활착 + 착과·경도 완벽조합', '무료 기술상담 포함'],
        shortDesc: '연작장해 토양 개량과 잔뿌리 발달의 절대강자 [바이오레드졸 500ml]와 인산·칼슘 이온 결합으로 착과·비대·경도를 완성하는 [에이스 인카 500ml]를 특별 할인가로 구성한 베스트셀러 시너지 세트.',
        targetCrops: '전 작물 (고추, 토마토, 딸기, 마늘, 양파, 과수, 엽채류)',
        dilution: {
            farm500L: '각 500ml (1,000배액 교차 또는 관주)',
            knapsack20L: '각 20ml',
            home1L: '각 1~2ml'
        },
        mechanism: [
            { step: 'STEP 01 · 바이오레드졸로 뿌리 세근 200% 확장', desc: '먼저 토양 염류를 풀고 새하얀 잔뿌리를 폭발시켜 양분 흡수 통로를 넓힙니다.' },
            { step: 'STEP 02 · 에이스 인카로 화아분화 및 세포벽 강화', desc: '확장된 뿌리와 잎을 통해 이온화 인산·칼슘을 공급하여 낙과를 막고 과실을 단단하게 키웁니다.' },
            { step: 'STEP 03 · 수확량 및 저장성 동시 극대화', desc: '뿌리와 열매를 동시에 잡는 2단계 시너지로 단품 사용 대비 체감 효과가 배가됩니다.' }
        ],
        goldenTime: '정식 초기부터 비대기까지 7~10일 간격 교차 처방 권장',
        synergyId: 'grow-500',
        synergyReason: '초기 생육 부진이 심한 포장이라면 [쑥쑥자라미2]를 추가해 3종 풀코스로 관리해 보세요.',
        reviews: [
            { author: '김*호 대표 (전남 나주 · 과수 및 원예 복합농가)', rating: 5, date: '2026.10', text: '매번 단품으로 사다가 시너지 세트로 쓰니 5천 원 할인도 되고 농사 공식이 딱 잡혀서 주변 작목반에 다 추천했습니다.' }
        ]
    },
    'set-a': {
        id: 'set-a',
        code: 'HZ-LIFE-A',
        name: '베란다 프리미엄 타워 수경재배 세트 (SET A)',
        engName: 'BALCONY PREMIUM HYDROPONIC TOWER BUNDLE',
        volume: '수경타워 + 레드졸 500ml + 자라미2 500ml + 모종키트',
        category: 'lifestyle',
        categoryLabel: '도시농업 · 베란다 스마트 가드닝',
        price: 189000,
        originalPrice: 235000,
        discountRate: 20,
        image: 'assets/panel_balcony.png',
        thumb: 'assets/panel_balcony.png',
        badges: ['도심 아파트 베란다 맞춤', '흙먼지·벌레 걱정 ZERO', '하이존 이온 양액 2종 기본포함'],
        shortDesc: '우리 집 베란다를 사계절 신선한 샐러드 농장으로! 저소음 순환식 수경재배 타워와 하이존바이오 무독성 이온 영양제(바이오레드졸 + 쑥쑥자라미2), 전용 스펀지 배지·씨앗 키트가 모두 포함된 올인원 프리미엄 패키지.',
        targetCrops: '유럽상추(버터헤드, 카이피라), 루꼴라, 바질, 청경채, 케일, 방울토마토 등 24포기 동시 재배',
        dilution: {
            farm500L: '가정용 수경 타워 전용',
            knapsack20L: '물탱크 20L 기준 20ml 투입',
            home1L: '물 1L당 동봉 스포이드 1ml 투입'
        },
        mechanism: [
            { step: 'STEP 01 · 무토양 청정 순환 수경 시스템', desc: '흙을 쓰지 않아 아파트 실내·베란다에서도 흙먼지나 날파리 없이 깔끔하게 재배할 수 있습니다.' },
            { step: 'STEP 02 · 하이존 이온 미네랄 양액 직행 공급', desc: '일반 화학 양액과 차원이 다른 하이존바이오 천연 이온 영양제로 채소의 아삭함과 향기가 살아납니다.' },
            { step: 'STEP 03 · 월 전기세 1,000원대 저전력 자동 순환', desc: '타이머 자동 급수 방식으로 여행을 다녀와도 시들지 않고 알아서 쑥쑥 자랍니다.' }
        ],
        goldenTime: '설치 당일 씨앗 파종 또는 모종 정식 후 주 1회 물 보충 및 영양액 투입',
        synergyId: 'goodbye-500',
        synergyReason: '베란다 창문을 열어두는 봄·여름철에는 천연 피톤치드 [굿바이충]을 함께 구비하시면 더욱 안심입니다.',
        reviews: [
            { author: '이*진 고객 (서울 마포 · 아파트 14층 베란다)', rating: 5, date: '2026.10', text: '주말마다 아이들이랑 삼겹살 구워 먹을 상추를 직접 따서 먹는데, 아삭함이 마트 상추랑 비교가 안 돼요!' }
        ]
    },
    'set-b': {
        id: 'set-b',
        code: 'HZ-LIFE-B',
        name: '카페 & 키친 LED 미니 플랜터 세트 (SET B)',
        engName: 'CAFE & KITCHEN LED PLANTER STARTER BUNDLE',
        volume: '식물생장 LED 플랜터 + 바이오레드졸 500ml + 허브씨앗 3종',
        category: 'lifestyle',
        categoryLabel: '도시농업 · 키친 & 카페 인테리어',
        price: 89000,
        originalPrice: 115000,
        discountRate: 23,
        image: 'assets/panel_cafe.png',
        thumb: 'assets/panel_cafe.png',
        badges: ['햇빛 없는 실내·주방 완벽재배', '풀스펙트럼 생장 LED 탑재', '인테리어 플랜테리어 오브제'],
        shortDesc: '햇빛이 들지 않는 주방 아일랜드 식탁이나 카페 카운터에서도 바질·민트·루꼴라를 싱그럽게 키우는 풀스펙트럼 LED 수경 플랜터 & 바이오레드졸 스타터 세트.',
        targetCrops: '스위트바질, 애플민트, 로즈마리, 루꼴라, 미니 상추 등 허브 및 엽채류',
        dilution: {
            farm500L: '실내 미니 플랜터 전용',
            knapsack20L: '-',
            home1L: '물 1L당 바이오레드졸 1ml 희석'
        },
        mechanism: [
            { step: 'STEP 01 · 태양광 재현 풀스펙트럼 LED 조명', desc: '식물 광합성에 최적화된 파장의 LED가 12시간 자동 점소등되어 실내 어디서든 웃자람 없이 자랍니다.' },
            { step: 'STEP 02 · 뿌리 부패 없는 바이오레드졸 산소 공급', desc: '정체된 물에서도 뿌리가 썩지 않고 하얀 수경 뿌리가 깨끗하게 유지됩니다.' },
            { step: 'STEP 03 · 요리 직전 바로 따서 쓰는 팜투테이블', desc: '파스타, 에이드, 샐러드에 바로 따서 올리는 최상의 신선함을 경험하세요.' }
        ],
        goldenTime: '주 1회 수위 확인 및 영양수 교체',
        synergyId: 'grow-500',
        synergyReason: '[쑥쑥자라미2]를 함께 사용하시면 허브 잎을 수확한 뒤 새순이 올라오는 속도가 2배 빨라집니다.',
        reviews: [
            { author: '박*현 대표 (성수동 브런치 카페 운영)', rating: 5, date: '2026.10', text: '카운터 옆에 두었더니 손님들이 다들 예쁘다고 사진 찍고, 음료 가니쉬용 민트랑 바질을 바로 따서 쓰니 원가도 아끼고 일석이조입니다.' }
        ]
    },
    'set-c': {
        id: 'set-c',
        code: 'HZ-LIFE-C',
        name: '아이와 함께 에듀 가드닝 키트 (SET C)',
        engName: 'KIDS ECO EDU-GARDENING STARTER KIT',
        volume: '투명 뿌리관찰 화분 2조 + 쑥쑥자라미2 500ml + 관찰일지',
        category: 'lifestyle',
        categoryLabel: '도시농업 · 어린이 생태교육 키트',
        price: 45000,
        originalPrice: 58000,
        discountRate: 22,
        image: 'assets/lifestyle_balcony.png',
        thumb: 'assets/lifestyle_balcony.png',
        badges: ['무독성 100% 안전 원료', '투명 수경 뿌리 관찰창', '초등 자연과학 탐구일지 동봉'],
        shortDesc: '아이들이 씨앗 발아부터 하얀 뿌리가 뻗어 나가는 과정까지 눈으로 직접 관찰하고 수확의 기쁨을 배우는 친환경 생태 교육 키트. 무독성 천연 이온 영양제 [쑥쑥자라미2 500ml] 정품이 포함됩니다.',
        targetCrops: '방울토마토, 비타민채, 청경채, 강낭콩, 해바라기 등 교육용 작물',
        dilution: {
            farm500L: '가정·교실 교육용 키트',
            knapsack20L: '-',
            home1L: '물 1L당 쑥쑥자라미2 1ml (동봉 안전 스포이드 사용)'
        },
        mechanism: [
            { step: 'STEP 01 · 360도 투명 근권 관찰 시스템', desc: '뿌리가 물을 흡수하고 세근이 뻗어 나가는 신비로운 생명 현상을 매일 관찰할 수 있습니다.' },
            { step: 'STEP 02 · 손에 닿아도 안전한 천연 이온 영양제', desc: '화학 독성이 전혀 없어 어린이집·초등학교 교실 및 가정에서 안심하고 사용할 수 있습니다.' },
            { step: 'STEP 03 · 편식 습관을 고치는 수확 체험', desc: '아이가 직접 키운 채소를 식탁에서 맛보며 자연스럽게 채소와 친해집니다.' }
        ],
        goldenTime: '매일 아침 아이와 함께 물 높이 확인 및 관찰일지 기록',
        synergyId: 'silver-500',
        synergyReason: '[순수 은수용액]을 함께 사용하시면 수경 관찰 용기의 물이 이끼 없이 더욱 맑게 유지됩니다.',
        reviews: [
            { author: '정*아 학부모 (대전 유성구 · 초등 2학년 맘)', rating: 5, date: '2026.09', text: '방학 숙제용으로 샀는데 아이가 아침마다 일어나자마자 식물부터 보러 가요. 채소 안 먹던 애가 자기가 키운 상추는 다 먹네요!' }
        ]
    }
};

// Map legacy/alternate product IDs so every link across all pages resolves cleanly
const HIGHZONE_ID_ALIASES = {
    'prod-grow2': 'grow-500',
    'prod-2': 'grow-500',
    'prod-redsol': 'redsol-500',
    'prod-1': 'redsol-500',
    'prod-dobok': 'dobok-100',
    'prod-4': 'dobok-100',
    'prod-goodbye': 'goodbye-500',
    'prod-5': 'goodbye-500',
    'prod-silver': 'silver-500',
    'prod-6': 'silver-500',
    'prod-selenium': 'selenium-500',
    'prod-7': 'selenium-500',
    'prod-tomato': 'tomato-1000',
    'prod-pepper': 'pepper-500',
    'prod-mushroom': 'mushroom-1000',
    'prod-coating': 'coating-1000',
    'prod-inca': 'inca-500',
    'prod-germanium': 'germanium-500',
    'prod-magnesium': 'magnesium-500',
    'prod-blackhole': 'blackhole-1000',
    'prod-goldwater': 'goldwater-1000',
    'synergy-1': 'synergy-redsol-inca'
};

function resolveProductId(rawId) {
    if (!rawId) return 'redsol-500';
    const clean = String(rawId).trim();
    if (HIGHZONE_PRODUCTS[clean]) return clean;
    if (HIGHZONE_ID_ALIASES[clean]) return HIGHZONE_ID_ALIASES[clean];
    return 'redsol-500';
}

function getProductById(rawId) {
    return HIGHZONE_PRODUCTS[resolveProductId(rawId)];
}

window.HIGHZONE_PRODUCTS = HIGHZONE_PRODUCTS;
window.resolveProductId = resolveProductId;
window.getProductById = getProductById;

/**
 * 1. Global Shopping Cart & Order Storage Manager
 */
const HighzoneCart = {
    storageKey: 'highzone_cart_v3',
    orderStorageKey: 'highzone_orders_v3',
    rxStorageKey: 'highzone_prescriptions_v3',

    getItems() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [];
            return parsed.map(item => {
                const pid = resolveProductId(item.id);
                const prod = HIGHZONE_PRODUCTS[pid];
                if (!prod) return null;
                return {
                    id: pid,
                    name: prod.name,
                    volume: prod.volume,
                    price: prod.price,
                    originalPrice: prod.originalPrice,
                    image: prod.image,
                    categoryLabel: prod.categoryLabel,
                    qty: Math.max(1, parseInt(item.qty, 10) || 1)
                };
            }).filter(Boolean);
        } catch (e) {
            return [];
        }
    },

    saveItems(items) {
        localStorage.setItem(this.storageKey, JSON.stringify(items));
        this.updateBadges();
        this.renderDrawerItems();
        window.dispatchEvent(new CustomEvent('highzone:cart-updated', { detail: { items } }));
    },

    addItem(rawId, qty = 1, openDrawer = true) {
        const pid = resolveProductId(rawId);
        const prod = HIGHZONE_PRODUCTS[pid];
        if (!prod) return;

        const items = this.getItems();
        const existing = items.find(i => i.id === pid);
        if (existing) {
            existing.qty += qty;
        } else {
            items.push({
                id: pid,
                name: prod.name,
                volume: prod.volume,
                price: prod.price,
                originalPrice: prod.originalPrice,
                image: prod.image,
                categoryLabel: prod.categoryLabel,
                qty: Math.max(1, qty)
            });
        }
        this.saveItems(items);
        this.showToast(`🛒 [${prod.name}] 상품이 장바구니에 담겼습니다.`);
        if (openDrawer) {
            this.openDrawer();
        }
    },

    updateQty(rawId, delta) {
        const pid = resolveProductId(rawId);
        let items = this.getItems();
        const target = items.find(i => i.id === pid);
        if (target) {
            target.qty += delta;
            if (target.qty <= 0) {
                items = items.filter(i => i.id !== pid);
            }
            this.saveItems(items);
        }
    },

    removeItem(rawId) {
        const pid = resolveProductId(rawId);
        const items = this.getItems().filter(i => i.id !== pid);
        this.saveItems(items);
    },

    clearCart() {
        this.saveItems([]);
    },

    getTotalCount() {
        return this.getItems().reduce((acc, item) => acc + item.qty, 0);
    },

    getTotalPrice() {
        return this.getItems().reduce((acc, item) => acc + (item.price * item.qty), 0);
    },

    getOriginalTotalPrice() {
        return this.getItems().reduce((acc, item) => acc + ((item.originalPrice || item.price) * item.qty), 0);
    },

    updateBadges() {
        const count = this.getTotalCount();
        document.querySelectorAll('.cart-badge, #cart-count-badge, .hz-cart-count').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'inline-flex' : 'none';
        });
    },

    // Orders history management
    getOrders() {
        try {
            const raw = localStorage.getItem(this.orderStorageKey);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    },

    saveOrder(orderData) {
        const orders = this.getOrders();
        orders.unshift(orderData);
        localStorage.setItem(this.orderStorageKey, JSON.stringify(orders));
        return orderData;
    },

    // AI Prescription history management
    getPrescriptions() {
        try {
            const raw = localStorage.getItem(this.rxStorageKey);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    },

    savePrescription(rxData) {
        const list = this.getPrescriptions().filter(r => r.code !== rxData.code);
        list.unshift(rxData);
        localStorage.setItem(this.rxStorageKey, JSON.stringify(list));
        this.showToast(`📋 [${rxData.title}] AI 처방전이 마이페이지 보관함에 저장되었습니다.`);
    },

    showToast(message) {
        let toast = document.getElementById('hz-global-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'hz-global-toast';
            toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 z-[250] bg-emerald-950/95 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 text-sm font-bold transition-all duration-300 opacity-0 pointer-events-none backdrop-blur-md';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `
            <span class="w-6 h-6 rounded-full bg-emerald-500 text-emerald-950 flex items-center justify-center font-black text-xs shrink-0">✓</span>
            <span>${message}</span>
        `;
        toast.classList.remove('opacity-0', 'translate-y-2');
        toast.classList.add('opacity-100', 'translate-y-0');
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-2');
            toast.classList.remove('opacity-100', 'translate-y-0');
        }, 2800);
    },

    initDrawer() {
        if (document.getElementById('highzone-cart-drawer')) return;

        const drawerHtml = `
            <div id="highzone-cart-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[190] hidden opacity-0 transition-opacity duration-300"></div>
            <aside id="highzone-cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[200] shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col justify-between">
                <div class="p-5 border-b border-slate-100 flex items-center justify-between bg-emerald-950 text-white">
                    <div class="flex items-center gap-2.5">
                        <span class="text-xl">🛒</span>
                        <div>
                            <h3 class="font-bold text-base leading-tight">하이존바이오 처방 장바구니</h3>
                            <p class="text-[11px] text-emerald-300">50,000원 이상 구매 시 전국 무료배송</p>
                        </div>
                    </div>
                    <button id="close-cart-drawer" class="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors" aria-label="닫기">
                        ✕
                    </button>
                </div>

                <div id="cart-drawer-items" class="flex-1 overflow-y-auto p-5 space-y-3 bg-slate-50/60"></div>

                <div class="p-5 border-t border-slate-200 bg-white space-y-3 shadow-[0_-10px_25px_rgba(0,0,0,0.04)]">
                    <div class="space-y-1.5 text-sm">
                        <div class="flex justify-between text-slate-500">
                            <span>상품 금액</span>
                            <span id="cart-drawer-subtotal" class="font-semibold text-slate-700">0원</span>
                        </div>
                        <div class="flex justify-between text-slate-500">
                            <span>배송비 (5만원 이상 무료)</span>
                            <span id="cart-drawer-shipping" class="font-semibold text-emerald-600">무료</span>
                        </div>
                        <div class="flex justify-between items-center pt-2 border-t border-slate-100">
                            <span class="text-slate-900 font-bold">총 결제 예정 금액</span>
                            <span id="cart-drawer-total" class="text-2xl font-black text-emerald-700">0원</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pt-1">
                        <a href="products.html" class="py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-center text-sm transition-all flex items-center justify-center">
                            + 다른 제품 더보기
                        </a>
                        <a href="order.html" id="cart-drawer-checkout-btn" class="py-3.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-center shadow-lg shadow-emerald-900/20 text-sm transition-all flex items-center justify-center gap-1.5">
                            <span>즉시 주문서 작성</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </aside>
        `;

        document.body.insertAdjacentHTML('beforeend', drawerHtml);

        const backdrop = document.getElementById('highzone-cart-backdrop');
        const closeBtn = document.getElementById('close-cart-drawer');

        backdrop.addEventListener('click', () => this.closeDrawer());
        closeBtn.addEventListener('click', () => this.closeDrawer());

        this.renderDrawerItems();
        this.updateBadges();
    },

    openDrawer() {
        this.initDrawer();
        const backdrop = document.getElementById('highzone-cart-backdrop');
        const drawer = document.getElementById('highzone-cart-drawer');
        if (!backdrop || !drawer) return;
        backdrop.classList.remove('hidden');
        setTimeout(() => {
            backdrop.classList.remove('opacity-0');
            drawer.classList.remove('translate-x-full');
        }, 10);
    },

    closeDrawer() {
        const backdrop = document.getElementById('highzone-cart-backdrop');
        const drawer = document.getElementById('highzone-cart-drawer');
        if (!backdrop || !drawer) return;
        backdrop.classList.add('opacity-0');
        drawer.classList.add('translate-x-full');
        setTimeout(() => {
            backdrop.classList.add('hidden');
        }, 300);
    },

    renderDrawerItems() {
        const container = document.getElementById('cart-drawer-items');
        const subtotalEl = document.getElementById('cart-drawer-subtotal');
        const shippingEl = document.getElementById('cart-drawer-shipping');
        const totalEl = document.getElementById('cart-drawer-total');
        if (!container) return;

        const items = this.getItems();
        if (items.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12 px-4">
                    <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-3xl mx-auto mb-3">🌱</div>
                    <p class="text-slate-700 font-bold text-sm mb-1">장바구니가 비어 있습니다.</p>
                    <p class="text-slate-400 text-xs mb-5">작물 증상에 맞는 하이존바이오 14종 전문 처방제를 담아보세요.</p>
                    <div class="flex flex-col gap-2">
                        <button type="button" onclick="HighzoneCart.addItem('synergy-redsol-inca', 1, false)" class="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl border border-emerald-200 transition-colors">
                            ⚡ 인기 1위 [바이오레드졸 + 인카 시너지 세트] 바로 담기
                        </button>
                        <button type="button" onclick="HighzoneCart.addItem('grow-500', 1, false)" class="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors">
                            🌿 만능 활력제 [쑥쑥자라미2 500ml] 바로 담기
                        </button>
                    </div>
                </div>
            `;
            if (subtotalEl) subtotalEl.textContent = '0원';
            if (shippingEl) shippingEl.textContent = '0원';
            if (totalEl) totalEl.textContent = '0원';
            return;
        }

        container.innerHTML = items.map(item => `
            <div class="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                <a href="product-detail.html?id=${item.id}" class="shrink-0">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-contain bg-slate-50 border border-slate-100 p-1">
                </a>
                <div class="flex-1 min-w-0">
                    <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">${item.volume}</span>
                    <a href="product-detail.html?id=${item.id}" class="block text-sm font-bold text-slate-900 truncate hover:text-emerald-700 mt-0.5">${item.name}</a>
                    <p class="text-xs font-extrabold text-emerald-700 mt-0.5">${(item.price * item.qty).toLocaleString()}원</p>
                    <div class="flex items-center gap-2 mt-2">
                        <button type="button" onclick="HighzoneCart.updateQty('${item.id}', -1)" class="w-6 h-6 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold hover:bg-slate-200">-</button>
                        <span class="text-xs font-bold w-6 text-center">${item.qty}</span>
                        <button type="button" onclick="HighzoneCart.updateQty('${item.id}', 1)" class="w-6 h-6 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold hover:bg-slate-200">+</button>
                    </div>
                </div>
                <button type="button" onclick="HighzoneCart.removeItem('${item.id}')" class="text-slate-300 hover:text-red-500 p-1.5 text-sm transition-colors" title="삭제">✕</button>
            </div>
        `).join('');

        const subtotal = this.getTotalPrice();
        const shipping = subtotal >= 50000 || subtotal === 0 ? 0 : 3000;
        const total = subtotal + shipping;

        if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString() + '원';
        if (shippingEl) shippingEl.textContent = shipping === 0 ? '무료배송' : '3,000원';
        if (totalEl) totalEl.textContent = total.toLocaleString() + '원';
    }
};

/**
 * 2. Quick Consultation & Bulk Quote Modal Manager
 */
const HighzoneConsult = {
    initModal() {
        if (document.getElementById('highzone-consult-modal')) return;

        const modalHtml = `
            <div id="highzone-consult-modal" class="fixed inset-0 bg-black/65 backdrop-blur-sm z-[220] hidden flex items-center justify-center p-4">
                <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-fadeIn max-h-[92vh] overflow-y-auto">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <span class="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-1">전주대 산학협력 R&D 연구소 직통</span>
                            <h3 class="text-lg font-black text-slate-900">1:1 농가 맞춤 처방 & 대량납품 문의</h3>
                        </div>
                        <button type="button" id="close-consult-modal" class="text-slate-400 hover:text-slate-600 p-1 text-lg">✕</button>
                    </div>
                    <p class="text-xs text-slate-600 mb-4 leading-relaxed">
                        재배 작물, 평수, 현재 겪고 계신 증상(연작장해·냉해·병해충·비대불량) 또는 작목반 대량 구매 문의를 남겨주시면 전담 연구원이 맞춤 희석 처방전을 안내해 드립니다.
                    </p>
                    <form id="consult-form" class="space-y-3">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">성함 / 농장·작목반명 *</label>
                            <input type="text" id="consult-name" required placeholder="예: 홍길동 (김제 한울농장)" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">연락처 *</label>
                            <input type="tel" id="consult-phone" required placeholder="010-0000-0000" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">재배 작물 및 규모 *</label>
                            <input type="text" id="consult-crop" required placeholder="예: 시설 고추 1,000평 / 베란다 수경재배" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 mb-1">문의 유형 및 증상</label>
                            <textarea id="consult-memo" rows="3" placeholder="예: 연작으로 뿌리 활착이 늦고 잎 끝이 마릅니다. 바이오레드졸+인카 희석 배율과 박스 단가 문의드립니다." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"></textarea>
                        </div>
                        <button type="submit" class="w-full py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 text-sm transition-all">
                            맞춤 처방 상담 접수하기
                        </button>
                    </form>
                    <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>📞 연구소 직통 전화상담</span>
                        <a href="tel:063-855-5001" class="font-extrabold text-emerald-700 hover:underline">063-855-5001 (바로걸기)</a>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('highzone-consult-modal');
        const closeBtn = document.getElementById('close-consult-modal');
        const form = document.getElementById('consult-form');

        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inquiry = {
                id: 'INQ-' + Date.now().toString().slice(-6),
                name: document.getElementById('consult-name').value.trim(),
                phone: document.getElementById('consult-phone').value.trim(),
                crop: document.getElementById('consult-crop').value.trim(),
                memo: document.getElementById('consult-memo').value.trim(),
                date: new Date().toLocaleDateString('ko-KR')
            };
            try {
                const list = JSON.parse(localStorage.getItem('highzone_inquiries_v3') || '[]');
                list.unshift(inquiry);
                localStorage.setItem('highzone_inquiries_v3', JSON.stringify(list));
            } catch (err) {}

            modal.classList.add('hidden');
            form.reset();
            HighzoneCart.showToast(`✅ [${inquiry.name}]님의 맞춤 처방 문의가 접수되었습니다. (직통: 063-855-5001)`);
        });
    },

    open(prefillCrop = '') {
        this.initModal();
        const modal = document.getElementById('highzone-consult-modal');
        if (prefillCrop) {
            const cropInput = document.getElementById('consult-crop');
            if (cropInput) cropInput.value = prefillCrop;
        }
        modal.classList.remove('hidden');
    }
};

window.HighzoneCart = HighzoneCart;
window.HighzoneConsult = HighzoneConsult;

/**
 * 3. Global DOM Wiring & Cross-Site Navigation Bar
 */
document.addEventListener('DOMContentLoaded', () => {
    HighzoneCart.initDrawer();
    HighzoneConsult.initModal();

    // Bind any cart open triggers
    document.querySelectorAll('[data-action="open-cart"], #header-cart-btn, .open-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            HighzoneCart.openDrawer();
        });
    });

    // Bind any consult modal triggers
    document.querySelectorAll('[data-action="open-consult"], .open-consult-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const prefill = btn.getAttribute('data-crop') || '';
            HighzoneConsult.open(prefill);
        });
    });
});
