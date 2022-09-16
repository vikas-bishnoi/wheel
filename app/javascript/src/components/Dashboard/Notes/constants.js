import Avatar from "images/avatar.png";
import * as yup from "yup";

export const TAG_OPTIONS = [
  {
    label: "Getting Started",
    value: "getting_started",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "user_flow",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
  {
    label: "V2",
    value: "v2",
  },
];

export const ASSIGNED_CONTACT_OPTIONS = [
  {
    label: "Value One",
    value: "value1",
  },
  {
    label: "Value Two",
    value: "value2",
  },
  {
    label: "Value Three",
    value: "value3",
  },
  {
    label: "Value Four",
    value: "value4",
  },
  {
    label: "Value Five",
    value: "value5",
  },
];

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assigned_contact: null,
  tags: null,
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_contact: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ASSIGNED_CONTACT_OPTIONS.map(tag => tag.label)),
      value: yup.string().oneOf(ASSIGNED_CONTACT_OPTIONS.map(tag => tag.value)),
    })
    .required("Assigned Contact is required"),
  tags: yup
    .array(
      yup.object().shape({
        label: yup.string().oneOf(TAG_OPTIONS.map(tag => tag.label)),
        value: yup.string().oneOf(TAG_OPTIONS.map(tag => tag.value)),
      })
    )
    .nullable()
    .required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES = [
  {
    id: 0,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "created",
    created_by: "Oliver Smith",
    created_at: "2 hours ago",
    avatar: Avatar,
  },
  {
    id: 1,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "drafted",
    created_by: "Oliver Smith",
    created_at: "2 hours ago",
    avatar: Avatar,
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "drafted",
    created_by: "Oliver Smith",
    created_at: "2 hours ago",
    avatar: Avatar,
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "drafted",
    created_by: "Oliver Smith",
    created_at: "2 hours ago",
    avatar: Avatar,
  },
];
