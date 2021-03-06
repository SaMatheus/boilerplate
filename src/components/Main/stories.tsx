import { Story, Meta } from "@storybook/react/types-6-0";
import { text, withKnobs } from "@storybook/addon-knobs";
import Main from ".";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs],
} as Meta;

export const Basic: Story = () => (
  <Main
    title={text("Title", "React Avançado")}
    description={text(
      "Description",
      "Typescript, React.js, Next.js e Styled Components"
    )}
  />
);
