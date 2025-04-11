import Elon from "../../shared/assets/elon.jpg";
import Docs from "../../shared/assets/docs.png";
import Photo from "../../shared/assets/photo.png";
import { createStore } from "effector";
import { newPageRoute } from "../../shared/routes";

export interface NewsItem {
  id: number;
  image: string;
  text: string;
  date: string;
  description: string;
}

export const mockNews: NewsItem[] = [
  {
    id: 1,
    image: Elon,
    text: "Прошли переговоры с Илоном Маском по применению автоматики СибБурмаш в Tesla",
    date: "19.03.2025",
    description: `
        <p>Прошли переговоры с Илоном Маском по применению автоматики Сиббурмаш в следующих версиях Tesla
        Москва, 31 марта 2025 года – В Кремниевой долине состоялись переговоры между представителями российской компании "Сиббурмаш" и Илоном Маском, генеральным директором Tesla. Темой обсуждения стало возможное применение инновационных автоматизированных систем "Сиббурмаш" в будущих версиях электромобилей Tesla.
        Компания "Сиббурмаш" специализируется на разработке передовых решений в области промышленной автоматики, робототехники и интеллектуальных систем управления. В ходе встречи эксперты российской компании представили Маску технологии, способные повысить эффективность и безопасность производства, а также улучшить автономные функции электромобилей</p>
        <p>По словам инсайдеров, особый интерес Tesla вызвала система адаптивного управления, которая использует передовые алгоритмы машинного обучения для оптимизации работы электродвигателей и батарей. Эта технология может существенно увеличить запас хода автомобилей без значительного увеличения массы аккумуляторов.
           «Переговоры прошли конструктивно, и мы видим серьезный потенциал для сотрудничества», — отметил один из участников встречи со стороны "Сиббурмаш". «Мы обсудили не только интеграцию наших решений в производство, но и возможное использование автоматики в новых разработках Tesla».</p>
      
        <p>Илон Маск, известный своим вниманием к перспективным технологиям, положительно оценил представленные разработки и выразил готовность продолжить обсуждение их применения в будущих моделях Tesla. По предварительным данным, стороны планируют организовать серию тестирований в исследовательском центре Tesla в Остине (Техас) в ближайшие месяцы.</p>
        <p>Официальные комментарии от Tesla пока не поступили, однако эксперты отрасли уже называют эти переговоры важным шагом в международном технологическом сотрудничестве. В случае успешного взаимодействия "Сиббурмаш" может стать первой российской компанией, чьи решения будут использованы в серийных электромобилях Tesla.
Подробности возможного сотрудничества пока не раскрываются, но участники рынка ожидают новых заявлений от обеих сторон в ближайшее время.</p>
    `,
  },
  {
    id: 2,
    image: Docs,
    text: "СибБурмаш получена декларация о соответствии требованиям ЕЭС",
    date: "20.03.2025",
    description: `
      <p>Компания «СибБурМаш» продолжает укреплять свои позиции на рынке нефтегазового оборудования, подтверждая высокое качество продукции и соответствие международным стандартам. В последнее время предприятие достигло значимых результатов: получение декларации о соответствии требованиям Евразийского экономического союза (ЕЭС) и активное участие в Тюменском нефтегазовом форуме (ТНФ). Эти события подчеркивают стремление компании к развитию, внедрению инноваций и расширению сотрудничества с ключевыми игроками отрасли.</p>
      <p><h1>Декларация о соответствии требованиям ЕЭС – гарантия качества и доверия</h1>
Одним из важнейших событий для «СибБурМаш» стало получение декларации о соответствии продукции требованиям Евразийского экономического союза. Этот документ подтверждает, что оборудование, производимое компанией, отвечает строгим нормам безопасности, экологичности и эффективности, установленным в рамках ЕЭС.
</p>
<p><h1>Значение сертификации для компании и отрасли</h1>
1. Доверие со стороны партнеров – наличие декларации ЕЭС повышает доверие к продукции среди российских и зарубежных заказчиков.
2. Расширение рынков сбыта – соответствие стандартам ЕЭС открывает возможности для поставок в страны Союза (Россия, Беларусь, Казахстан, Армения, Кыргызстан).
3. Конкурентное преимущество – в условиях ужесточающихся требований к оборудованию наличие сертификата делает продукцию «СибБурМаш» более привлекательной для нефтегазовых компаний.
</p>
<p><h1>Какая продукция прошла сертификацию?</h1>
Компания декларировала соответствие бурового и обсадного оборудования, а также комплектующих для нефтегазодобычи. В процессе проверки эксперты оценивали:
<ul>
<li>• механическую прочность,</li>
<li>• устойчивость к агрессивным средам,</li>
<li>• соответствие экологическим нормам.</li>
</ul>
</p>
<p>Получение декларации – это не просто формальность, а результат многолетней работы над совершенствованием технологий и контроля качества.</p>
    `,
  },
  {
    id: 3,
    image: Photo,
    text: "СибБурмаш принял участие в Тюменском нефтегазовом форуме",
    date: "19.03.2025",
    description: `
      <p>Параллельно с подтверждением соответствия стандартам ЕЭС «СибБурМаш» принял участие в одном из ключевых отраслевых мероприятий – Тюменском нефтегазовом форуме (ТНФ). Это событие объединило ведущие компании, экспертов и государственных представителей для обсуждения тенденций, технологий и перспектив нефтегазовой отрасли.</p>
      <p><h1>Почему ТНФ важен для «СибБурМаш»?</h1></p>
      <p><h1>Тюменский нефтегазовый форум – это:</h1>
      <ul>
<li>• площадка для презентации новых разработок,</li>
<li>• возможность заключения контрактов,</li>
<li>• обмен опытом с коллегами и аналитиками рынка.</li>
</ul>
</p>
<p><h1>Компания представила свои последние разработки, включая:</h1>
<li>• Усовершенствованные буровые установки с повышенной износостойкостью.</li>
<li>• Энергоэффективные решения для снижения затрат на добычу.</li>
<li>• Цифровые технологии мониторингаоборудования в режиме реального времени.</li>
</p>
<p>
<h1>Ключевые тренды, отмеченные на форуме</h1>
1. Импортозамещение – многие компании активно переходят на отечественное оборудование, и «СибБурМаш» готов предложить конкурентоспособные аналоги зарубежным образцам.
2. Цифровизация – внедрение IoT (Интернета вещей) и AI (искусственного интеллекта) для прогнозирования поломок и оптимизации добычи.
3. Экологичность – ужесточение требований к снижению углеродного следа в нефтегазовой отрасли.
</p>
<p>Участие в ТНФ позволило «СибБурМаш» не только продемонстрировать свои достижения, но и наметить пути дальнейшего развития.</p>
    `,
  },
];

export const $newsDetail = createStore<NewsItem | null>(null).on(
  newPageRoute.$params,
  (_, params: { id: string }) => {
    const id =
      params.id && !isNaN(Number(params.id)) ? Number(params.id) : null;
    if (id === null) {
      return null;
    }
    const newsItem = mockNews.find((item) => item.id === id);
    return newsItem || null;
  },
);
