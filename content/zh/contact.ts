import { companyInfo } from "../company";
import type { ContactPageContent } from "../types";

export const contactPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | 联系我们`,
    description: "技术咨询、样品申请与商务合作联系页面。",
  },
  hero: {
    eyebrow: "",
    titleLine1: "",
    titleLine2: companyInfo.brandName,
    description: "技术咨询、样品申请和商务合作，可通过下方联系方式与我们沟通。",
    notice: "您可以使用下方表单，或直接发送邮件至 info@plutoenerji.com 与我们联系。",
    primaryLabel: "发送消息",
    secondaryLabel: "查看公司信息",
  },
  heroHighlights: [
    { title: "技术沟通", description: "用于规格讨论、工艺问题和高岭土相关需求的清晰沟通路径。" },
    { title: "样品申请", description: "适用于后续样品安排、材料跟进和应用匹配交流。" },
    { title: "商务合作", description: "适用于合作、商业洽谈和工业协同的专业沟通结构。" },
  ],
  company: {
    section: {
      eyebrow: "公司信息",
      title: "面向客户与工业合作伙伴的直接 B2B 联系窗口。",
      description:
        `${companyInfo.brandName} 通过清晰专业的响应结构支持技术沟通、样品协调和商务合作。`,
    },
    summary: "如需商务介绍、材料讨论或项目交流，可通过本页列出的联系方式与团队直接联系。",
    details: [
      { label: "公司", value: companyInfo.brandName },
      { label: "地址", value: companyInfo.address },
      { label: "电子邮箱", value: companyInfo.email, href: companyInfo.emailHref },
      { label: "电话", value: companyInfo.phone, href: companyInfo.phoneHref },
    ],
  },
  form: {
    title: "发送消息",
    description: "该表单可直接用于发送原矿高岭土供应、样品申请和商务合作信息。",
    submitLabel: "发送咨询",
    fields: [
      { name: "name", label: "姓名", type: "text", placeholder: "请输入姓名", required: true },
      { name: "company", label: "公司", type: "text", placeholder: "请输入公司名称" },
      { name: "email", label: "电子邮箱", type: "email", placeholder: "请输入邮箱地址", required: true },
      { name: "phone", label: "电话", type: "tel", placeholder: "请输入电话号码" },
      { name: "subject", label: "主题", type: "text", placeholder: "请输入主题", fullWidth: true, required: true },
      {
        name: "message",
        label: "留言",
        type: "textarea",
        placeholder: "请输入您的内容",
        rows: 6,
        fullWidth: true,
        required: true,
      },
    ],
    messages: {
      success: "您的信息已成功发送，我们会尽快与您联系。",
      error: "发送失败，请重试或直接发送邮件至 info@plutoenerji.com。",
      sending: "发送中...",
      validationRequired: "请完整填写必填字段。",
      validationEmail: "请输入有效的电子邮箱地址。",
    },
  },
  supportCards: [
    { title: "样品申请", description: "用于未来样品协调、材料评估和适配讨论。" },
    { title: "技术咨询", description: "欢迎提交工艺问题、质量议题和应用相关技术要求。" },
    { title: "商务合作", description: "适用于供应、分销、工业合作和战略伙伴关系沟通。" },
  ],
} satisfies ContactPageContent;
