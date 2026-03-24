import { companyInfo } from "../company";
import type { ContactPageContent } from "../types";

export const contactPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Контакты`,
    description: "Страница для технических запросов, запросов образцов и делового сотрудничества.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "",
    titleLine2: companyInfo.brandName,
    description: "Технические запросы, запросы образцов и деловые предложения можно направить через каналы связи ниже.",
    notice: "Вы можете использовать форму ниже или написать напрямую на info@plutoenerji.com.",
    primaryLabel: "Отправить сообщение",
    secondaryLabel: "Смотреть данные компании",
  },
  heroHighlights: [
    { title: "Техническая координация", description: "Понятный путь для обсуждения спецификаций, технологических вопросов и запросов по каолину." },
    { title: "Запросы образцов", description: "Подготовленная структура для образцов, отслеживания материалов и обсуждения применимости." },
    { title: "Деловое сотрудничество", description: "Профессиональная коммуникация для партнерств, коммерческих обсуждений и промышленного сотрудничества." },
  ],
  company: {
    section: {
      eyebrow: "Информация о компании",
      title: "Прямая B2B точка контакта для клиентов и промышленных партнеров.",
      description:
        `${companyInfo.brandName} поддерживает техническое общение, координацию образцов и деловое сотрудничество в четкой и профессиональной форме.`,
    },
    summary: "Для коммерческих контактов, обсуждения материала и проектных вопросов команда доступна по каналам связи, указанным на этой странице.",
    details: [
      { label: "Компания", value: companyInfo.brandName },
      { label: "Адрес", value: companyInfo.address },
      { label: "Email", value: companyInfo.email, href: companyInfo.emailHref },
      { label: "Телефон", value: companyInfo.phone, href: companyInfo.phoneHref },
    ],
  },
  form: {
    title: "Отправить сообщение",
    description: "Эта форма отправляет запросы по поставке сырого каолина, образцам и деловому сотрудничеству напрямую команде Pluto Enerji.",
    submitLabel: "Отправить запрос",
    fields: [
      { name: "name", label: "Полное имя", type: "text", placeholder: "Введите имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Введите название компании" },
      { name: "email", label: "Email", type: "email", placeholder: "Введите email", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "Введите номер телефона" },
      { name: "subject", label: "Тема", type: "text", placeholder: "Введите тему", fullWidth: true, required: true },
      {
        name: "message",
        label: "Сообщение",
        type: "textarea",
        placeholder: "Введите сообщение",
        rows: 6,
        fullWidth: true,
        required: true,
      },
    ],
    messages: {
      success: "Ваш запрос успешно отправлен. Наша команда свяжется с вами в ближайшее время.",
      error: "Не удалось отправить запрос. Попробуйте еще раз или напишите на info@plutoenerji.com.",
      sending: "Отправка...",
      validationRequired: "Пожалуйста, заполните обязательные поля.",
      validationEmail: "Пожалуйста, укажите корректный email.",
    },
  },
  supportCards: [
    { title: "Запрос образца", description: "Используйте этот канал для будущей координации образцов, оценки материала и обсуждения применимости." },
    { title: "Технический запрос", description: "Отправляйте технологические вопросы, темы качества и требования, связанные с применением." },
    { title: "Деловое сотрудничество", description: "Откройте диалог о поставках, дистрибуции, промышленном сотрудничестве или стратегическом партнерстве." },
  ],
} satisfies ContactPageContent;
