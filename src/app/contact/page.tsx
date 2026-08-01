import { Column, Heading, Text, Row, Button, Meta, Schema } from "@once-ui-system/core";
import React from "react";
import { baseURL, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Contact – ${person.name}`,
    description: `Get in touch with ${person.name}`,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Contact")}`,
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <Column maxWidth="s" paddingTop="24" horizontal="center" gap="m" align="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/contact"
        title={`Contact – ${person.name}`}
        description={`Get in touch with ${person.name}`}
        image={`/api/og/generate?title=${encodeURIComponent("Contact")}`}
        author={{
          name: person.name,
          url: `${baseURL}/contact`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="m" variant="heading-strong-xl" align="center">
        Get in touch
      </Heading>
      <Text onBackground="neutral-weak" align="center" marginBottom="l">
        The fastest way to reach me is email. Happy to talk about roles,
        projects, or anything ML/data related.
      </Text>
      <Row gap="8" wrap horizontal="center" fitWidth data-border="rounded">
        {social
          .filter((item) => item.essential)
          .map(
            (item) =>
              item.link && (
                <React.Fragment key={item.name}>
                  <Button
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="m"
                    weight="default"
                    variant="secondary"
                  />
                </React.Fragment>
              ),
          )}
        <Button
          href="tel:+919654628996"
          label="+91 96546 28996"
          size="m"
          weight="default"
          variant="secondary"
        />
      </Row>
    </Column>
  );
}