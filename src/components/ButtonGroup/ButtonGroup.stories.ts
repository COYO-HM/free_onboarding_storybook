import {Meta, StoryObj} from "@storybook/react";
import ButtonGroup from "./ButtonGroup.tsx";

const meta = {
    title: 'STUDY/ButtonGroup',
    component: ButtonGroup,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultGroup: Story = {
    args: {
        primary: true,
        label: 'ButtonGroup',
    },
};
