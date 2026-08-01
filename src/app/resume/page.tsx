import { Column, Heading, Text, Button, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Resume – ${person.name}`,
    description: `Download the resume of ${person.name}`,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Resume")}`,
    path: "/resume",
  });
}

export default function Resume() {
  return (
    <Column maxWidth="s" paddingTop="24" horizontal="center" gap="m" align="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/resume"
        title={`Resume – ${person.name}`}
        description={`Download the resume of ${person.name}`}
        image={`/api/og/generate?title=${encodeURIComponent("Resume")}`}
        author={{
          name: person.name,
          url: `${baseURL}/resume`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="m" variant="heading-strong-xl" align="center">
        Resume
      </Heading>
      <Text onBackground="neutral-weak" align="center" marginBottom="l">
        Download my resume as a PDF, or reach out directly.
      </Text>
      <Button
        href="/resume/dhruv-arora-resume.pdf"
        variant="secondary"
        size="m"
        weight="default"
        arrowIcon
      >
        Download Resume (PDF)
      </Button>
    </Column>
  );
}