import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
  Section,
  Hr,
} from "@react-email/components";

type SendWelcomeEmailProps = {
  name: string;
  email: string;
};

export default function SendWelcomeEmail({
  name,
  email,
}: SendWelcomeEmailProps) {
  const previewText = `Welcome, ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-[465px] border-r border-gray-950 p-5">
            <Heading className="mx-0 my-8 p-0 text-center text-2xl font-normal">
              Micro SaaS Boilerplate Next
            </Heading>

            <Text className="text-sm">Hello {name},</Text>
            <Text className="text-sm">
              Welcome to Micro SaaS Boilerplate Next.
            </Text>
            <Text className="text-sm">
              Here are some things you can do to get started:
            </Text>

            <Section className="flex flex-col gap-4 pl-4">
              <li className="text-xs">Create a team</li>
              <li className="text-xs">Set up your profile</li>
              <li className="text-xs">Explore our time management tools</li>
            </Section>

            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="no_underline rounded bg-[#121619] p-4 text-center text-sm text-white"
                href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}
              >
                Start now
              </Button>
            </Section>

            <Text>Thank you for choosing Micro SaaS Boilerplate Next!</Text>

            <Text className="text-sm text-gray-600">
              Agley Melo CEO Micro SaaS Boilerplate Next.
            </Text>

            <Hr />

            <Section>
              <Text className="text-gray-600">
                This email was intended for{" "}
                <span className="underline">{email}</span>. if you were not
                expecting this email, you can ignore this email. if you
                don&apos;t receive emails like this is the future, you can
                unsubscribe here.{" "}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
