import { Column, Heading, Text, Button } from "@once-ui-system/core";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Resume – ${person.name}`,
    description: `View or download the resume of ${person.name}`,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Resume")}`,
    path: "/resume",
  });
}

export default function Resume() {
  return (
    <Column maxWidth="m" paddingTop="24" horizontal="center" gap="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/resume"
        title={`Resume – ${person.name}`}
        description={`View or download the resume of ${person.name}`}
        image={`/api/og/generate?title=${encodeURIComponent("Resume")}`}
        author={{
          name: person.name,
          url: `${baseURL}/resume`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="s" variant="heading-strong-xl" align="center">
        Resume
      </Heading>
      <Column marginBottom="m">
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
      <Column
        fillWidth
        border="neutral-medium"
        radius="l"
        overflow="hidden"
        style={{ height: "85vh" }}
      >
        <iframe
          src="/resume/dhruv-arora-resume.pdf"
          title="Dhruv Arora Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </Column>
      <Text
        variant="body-default-s"
        onBackground="neutral-weak"
        align="center"
        marginTop="s"
      >
        If the preview doesn't load on your device, use the download
        button above.
      </Text>
    </Column>
  );
}