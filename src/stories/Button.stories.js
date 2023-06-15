import { Button } from "../components/Button/Button.jsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

// src/components/Component.stories.tsx

export const Snapshot = () => (
  <>
    <Primary />
    <Secondary />
    <Large />
    <Small />
  </>
);
Snapshot.parameters = {
  // we disabled chromatic in .storybook/preview.tsx, so we need to
  // un-disable it (double negatives are fun)
  chromatic: { disableSnapshot: false },
};
