import React from 'react';
import s from './About.module.css'
import History from "./History/History";
import Administration from "./Administration/Administration";
import Title from "../Title/Title";

function About(props) {
    const historyData = [{
            "id": 1,
            "title": "История Жети-Өгүзского сельского округа",
            "content": "Жети-Өгүз  айыл аймагына  караштуу айыл, аймагынын  аты. Жети-Өгүз  суусунун боюнда, деңиз  деңгээлинен 1737 м бийиктикте  жайгашкан. Район  борбору Кызыл-Суудан 25 км, ал эми Балыкчы  темир жол станциясынан 211 км алыстыкта  турат.\r\nКалкынын саны  айыл аймагы боюнча  2018-жылдын башына  карата  2360 кожолукта 11420 адам, ал эми Жети-Өгүз айылынын  өзүндөгү 906 түтүндө 4337 адам  жашайт.\r\nАйыл  1913-ж.негизделип, алгач анда 25 түтүн  гана эл отурукташкан.\r\n\r\n     Адегенде Эсенеман  айылы, ал эми орус  келгиндери  көчүп  келгенден кийин \r\n“ Высокое”, коллективдештирүү  башталганда айыл  Жети-Өгүз деп мурдагы атынан аталган. Алгачкы салынган көчө “ №25 көчө”, 1940-ж.1-Май, учурда Д.Иманов атындагы көчө деп айтылат. Жети-Өгүздө  алгач “Үлгү”колхозу уюшулуп, башкарманын  төрагасы\r\nболуп К.Абдраев дайындалган. Ак-Кочкордо “Кожолук күч”, Желе-Дөбөдө “ Кошмо-Талап” колхоздору уюштурулуп, Жети-Өгүз  айылдык Советине  баш ийип турган, Кабак,Чырак айылдарында  болсо башка  колхоздор түзулуп иштеген.1976-ж. Алар “Үлгү”колхозуна кошулган. Жети-Өгүз  айылы 1955-жылга чейин райондун борбору  болуп эсептелген. Жет-Өгүз жана  Пакровка  райондору  бириктирилгенден  кийин  Жети-Өгүз  району  жоюлуп, райондун борбору ушул эле ат менен Покровкага көчүрүлгөн.\r\n\r\nАйылдык Советтеги 3 колхоз “Үлгү”колхозуна  бириктирилген. 1983-86-ж. Мамлекттик малды бордоп семиртүүчү комплекс,1994-ж. Чарба “ Жети-Өгүз”жана “ Төрт-Күл”бирикмелерине бөлүнүп, 1996-ж. кайра кошулуп Жети-Өгүз айыл өкмөтү, 2013-жылдан Жети-Өгүз айыл аймагы деп аталат. Ага Жети-Өгүз ,Ак-Кочкор, Желе-Дөбө, Чырак, Кабак, Жети-Өгүз курорту  жана Талды-Булак участкасы  кирген. Жети-Өгүздүн өзүндө Белек уруусунун Данияр уругунун  тукумдары, Ат-Башылык  Черик уруусунун  өкүлдөрү жана Түштүктөн келген  Адигине уруусунун анча көп  эмес түтүн эли жашайт.\r\n\r\n Айыл аймагынын эли  негизинен  мал чарбачылыгы жана айыл  чарбасын туташ  алып  жүрөт. Жети-Өгүздө Д.Иманов, Кабакта Ж.Аманбаев, Чыракта Талып Акун, Желе-Дөбөдө\r\nБ.Исмаилов атындагы орто мектептер, Ак-Кочкордо 9 жылдык О.Эсенканов мектеби, участкалык оорукана, үй-бүлөлүк дарыгерлер  пункту, 4 ФАП, бала бакча, 4 китепкана, 2 клубдук мекеме, соода-сатык  дүкөндөрүнүн түйүнү, Улуу  Ата Мекендик согушта курман болгон  жоокерлерге арналып тургузулган эстелик бар. Бул айылдардан Бирназар бий, Мамырбай ажы, Талып Молдо, Алдаш Молдо Жээнике уулу, Данаке Иманов, Ыбрайым Абдрахманов, Абдулхай Алдашев, Жалил  Абдыкадыров, Заит жана Раиса Кыдырбаева, Жумгалбек Аманбаев, Зайна Бейшекеева, Садырбек  Дубанаев сыяктуу  элибизге ысымдары белгилүү мамлекеттик, коомдук жана саясий  ишмерлер, аалымдар, окумуштуулар, чарбалык  жетекчилер  менен  мал чарбасынын устаттары чыгышкан.",
            "photo": "https://img.geliophoto.com/jetioguz/00_jetioguz.jpg",
            "time_create": "2023-07-24T05:24:26.607306Z",
            "time_update": "2023-07-29T08:50:20.116145Z"
    }]
    const newHistoryData = historyData.map(el => <History title={el.title}
                                                          content={el.content}
                                                          photo={el.photo}
                                                          time={el.time_create}/>)



    const adminData = [
        {
            "id": 1,
            "name": "Александрова Мария Васильевна",
            "position": "PR-менеджер",
            "contact_info": "Отвечает за связь с общественностью и медиа",
            "email": "alexandrova@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 2,
            "name": "Зайцев Алексей Павлович",
            "position": "маркетолог",
            "contact_info": "Разрабатывает и внедряет маркетинговые стратегии",
            "email": "zaytsev@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 3,
            "name": "Ковалев Денис Сергеевич",
            "position": "инженер",
            "contact_info": "Занимается проектированием и разработкой",
            "email": "kovalyov@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 4,
            "name": "Лебедева Анна Александровна",
            "position": "администратор",
            "contact_info": "Обеспечивает организационную поддержку",
            "email": "lebedeva@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 5,
            "name": "Макаров Сергей Викторович",
            "position": "программист",
            "contact_info": "Занимается разработкой программного обеспечения",
            "email": "makarov@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 6,
            "name": "Новикова Елена Петровна",
            "position": "юрист",
            "contact_info": "Занимается юридической поддержкой компании",
            "email": "novikova@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 7,
            "name": "Орлов Владимир Андреевич",
            "position": "директор",
            "contact_info": "Отвечает за общее управление компанией",
            "email": "orlov@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 8,
            "name": "Павлова Анастасия Васильевна",
            "position": "аналитик данных",
            "contact_info": "Занимается анализом больших объемов данных",
            "email": "pavlova@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 9,
            "name": "Романов Дмитрий Петрович",
            "position": "руководитель проекта",
            "contact_info": "Управляет выполнением проектов компании",
            "email": "romanov@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        },
        {
            "id": 0,
            "name": "Смирнов Александр Сергеевич",
            "position": "специалист по закупкам",
            "contact_info": "Отвечает за закупку материалов и оборудования",
            "email": "smirnov@example.com",
            "photo": "https://i.pinimg.com/564x/96/2d/3c/962d3c673030ab4d5ca5f83dabec0539.jpg"
        }
    ]
    const newAdminData = adminData.map(el => <Administration name={el.name}
                                                             position={el.position}
                                                             contactInfo={el.contact_info}
                                                             email={el.email}
                                                             img={el.photo}/>)

    return (
        <div>
            {newHistoryData}
            <Title name="Администрация муниципалитета"/>
            {newAdminData}
        </div>
    );
}

export default About;