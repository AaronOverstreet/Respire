import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export const CALENDLY = "https://calendly.com/overstreetaaron";

function ScholarshipBlocks() {
  return (
    <>
      <p>
        <strong>Want to give more? The Respire Scholarship Fund:</strong> Some
        clients choose to pay a little more — not because they have to, but
        because they want to extend the reach of this work to people for whom
        even the standard rate represents a real stretch. If that&apos;s you,{" "}
        <strong>become a Donor</strong> by offering more than the standard
        rate. This goes directly toward making sessions available to clients in
        the early stages of their journey, or those who have chosen paths of
        service over financial reward.
      </p>
      <p>
        <strong>Need support? Scholarship Sessions:</strong> The Respire
        Scholarship Fund exists because other clients have chosen to pay it
        forward. If the standard rate would create a genuine hardship for you
        right now, <strong>scholarship-assisted sliding scale sessions</strong>{" "}
        may be available—reach out to Aaron. There&apos;s no application and no
        means test. If you&apos;re drawn to this work and the standard rate is a
        real obstacle, just reach out. Aaron will have a brief conversation with
        you and go from there.
      </p>
    </>
  );
}

export const SERVICE_SECTIONS: {
  id: string;
  title: string;
  summary: string;
  body: ReactNode;
}[] = [
  {
    id: "rebirthing",
    title: "Individual Rebirthing Breathwork Sessions",
    summary:
      "A simple yet powerful healing modality for releasing stored emotion, managing stress, and deep relaxation—in person or on Zoom.",
    body: (
      <>
        <p>
          Rebirthing Breathwork is a simple yet powerful healing modality which
          releases and heals stored negative emotions and traumatic memories. It
          is also an effective tool to manage stress and create deep lasting
          relaxation.
        </p>
        <p>
          Sessions can be done in-person or online via Zoom. When we experience
          traumatic events as children we often don&apos;t have the capacity to
          fully feel and process those events. The result is that our unfelt
          emotions and memories get stuck in our body and subconscious mind.
          These stored feelings and memories then create disturbances in our life
          ranging anywhere from subtle stress to failed relationships to chronic
          disease. If we ignore these stored traumas, our symptoms continue and
          often get worse.
        </p>
        <p>
          The breath is the tool of resolution. It enables us to connect with
          our pain and release it, freeing us to be our true selves. Rebirthing
          Breathwork leads to a deeper understanding of our unique role in the
          world and the gifts we have to offer.
        </p>
        <p>
          <strong>Standard rates:</strong>
        </p>
        <ul>
          <li>
            <strong>In-person</strong> Rebirthing Breathwork Session (2–3
            hours): <strong>$180</strong>
          </li>
          <li>
            <strong>Zoom</strong> Rebirthing Breathwork Session (2–3 hours):{" "}
            <strong>$160</strong>
          </li>
        </ul>
        <p>
          Scholarship-assisted sliding scale sessions are available at{" "}
          <strong>$108–160</strong> (in-person) or <strong>$108–140</strong>{" "}
          (Zoom) when the standard rate would create genuine hardship.
        </p>
        <ScholarshipBlocks />
      </>
    ),
  },
  {
    id: "core-story",
    title: "Re-Writing Your Core Story Session",
    summary:
      "Using Leonard Orr’s Personal Law / Personal Lie framework to transform limiting beliefs.",
    body: (
      <>
        <p>
          We all have positive qualities which give us a unique purpose in life.
          Sometimes these qualities become inhibited by negative subconscious
          beliefs, often born from painful childhood experiences. The
          Re-Writing Your Core Story session is an effective way to free yourself
          from these patterns using the Personal Law / Personal Lie consultation
          created by Leonard Orr and Laz Jefferson.
        </p>
        <p>
          Session length is two hours. Sessions are available in person or on
          Zoom.
        </p>
        <p>
          <strong>Standard rates:</strong>
        </p>
        <ul>
          <li>
            <strong>In-person</strong> Core Story Session (2 hours):{" "}
            <strong>$160</strong>
          </li>
          <li>
            <strong>Zoom</strong> Core Story Session (2 hours):{" "}
            <strong>$140</strong>
          </li>
        </ul>
        <p>
          Scholarship-assisted sliding scale: <strong>$108–140</strong>{" "}
          (in-person) or <strong>$108–120</strong> (Zoom) when appropriate.
        </p>
        <ScholarshipBlocks />
      </>
    ),
  },
  {
    id: "daily-practice",
    title: "Building a Daily Breathwork Practice Session",
    summary:
      "Design a personalized breathwork practice from many techniques—nervous system regulation, vitality, chakras, and more.",
    body: (
      <>
        <p>
          In this session we design a breathwork practice specific to your
          needs. You will acquire practical tools to use breathwork for the
          results you desire. Topics may include regulating the nervous system,
          building vitality, breathing deeper, deep relaxation, Prana, chakras,
          digestion, mental clarity, and more.
        </p>
        <p>
          <strong>Standard rates:</strong>
        </p>
        <ul>
          <li>
            <strong>In-person</strong> Daily Practice Session (90 min):{" "}
            <strong>$160</strong>
          </li>
          <li>
            <strong>Zoom</strong> Daily Practice Session (90 min):{" "}
            <strong>$140</strong>
          </li>
        </ul>
        <p>
          Scholarship-assisted sliding scale: <strong>$108–140</strong>{" "}
          (in-person) or <strong>$108–120</strong> (Zoom) when appropriate.
        </p>
        <ScholarshipBlocks />
      </>
    ),
  },
  {
    id: "group",
    title: "Group Rebirthing Breathwork",
    summary:
      "Supportive group sessions—see Events for upcoming group breaths.",
    body: (
      <>
        <p>
          These sessions offer a supportive and intimate group dynamic in which
          to experience the power of the breath. Participants report feeling
          refreshed, rejuvenated, and supremely relaxed.
        </p>
        <p>
          <Link to="/events">View upcoming group breaths on the Events page</Link>. To host a group at your home, contact Aaron.
        </p>
      </>
    ),
  },
  {
    id: "mentoring",
    title: "Breathworker Mentoring Session",
    summary: "For aspiring breathworkers—90-minute sessions drawing on 35+ years of experience.",
    body: (
      <>
        <p>
          Mentoring sessions for aspiring breathworkers. Session length is 90
          minutes, in person or on Zoom.
        </p>
        <p>
          <strong>Standard rates:</strong>
        </p>
        <ul>
          <li>
            <strong>In-person</strong> Mentoring Session (90 min):{" "}
            <strong>$160</strong>
          </li>
          <li>
            <strong>Zoom</strong> Mentoring Session (90 min):{" "}
            <strong>$140</strong>
          </li>
        </ul>
        <p>
          Scholarship-assisted sliding scale: <strong>$108–140</strong>{" "}
          (in-person) or <strong>$108–120</strong> (Zoom) when appropriate.
        </p>
        <ScholarshipBlocks />
      </>
    ),
  },
  {
    id: "retreats",
    title: "Movement & Breath Retreats",
    summary:
      "Multi-day retreats with Aaron and Bhagavati—movement, breath, and beautiful locations.",
    body: (
      <>
        <p>
          Aaron and Bhagavati facilitate multi-day retreats centered around
          movement and breath at beautiful locations. Reach out if you are
          interested in co-creating or have a vision for a retreat. Watch the
          Events page for upcoming retreats and subscribe to the newsletter.
        </p>
      </>
    ),
  },
];
