import type { Collection } from "tinacms";
import IconComponent from "../components/IconComponent";

export const ContactCollection: Collection = {
    name: "contact",
    label: "Contact links",
    path: "src/content/contact",
    format: "json",
    ui: {
        global: true,
    },
    fields: [
        {
            name: "contact",
            label: "Contact Links",
            type: "object",
            list: true,
            ui: {
                itemProps: (item) => {
                    return {
                        label: item.title
                    }
                },
            },
            fields: [
                {
                    name: "title",
                    label: "Title",
                    type: "string"
                },
                {
                    name: "link",
                    label: "Link",
                    type: "string"
                },
                {
                    name: "icon",
                    label: "Icon",
                    type: "string",
                    ui: {
                        //@ts-ignore
                        component: IconComponent
                    }
                }
            ],
        }
    ]
}