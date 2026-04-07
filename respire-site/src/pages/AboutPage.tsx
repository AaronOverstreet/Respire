import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

export function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="page-title">About Aaron</h1>
          <div className="about-page prose">
            <p>
              <a
                href="https://www.mysticmag.com/psychic-reading/interview-aaron-overstreet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the MysticMag interview with Aaron
              </a>
              .
            </p>
            <p>
              Aaron has been assisting people in self empowerment and spiritual
              healing for over three decades. He believes that we can attain
              ownership and mastery over our lives and experiences while working
              in conjunction with our higher selves.
            </p>
            <p>
              Respire Breathwork is based on the teachings of Leonard Orr. It
              encompasses Aaron&apos;s deep understanding of the breath and his
              work as a healer and spiritual guide. His ongoing dedication to
              discovering the healing powers of the breath have led to this gentle
              yet powerful style of breathwork—with a focus on{" "}
              <strong>rebirthing breathwork</strong>.
            </p>
            <p>
              Aaron studied directly with Leonard and has led trainings and
              workshops in Portland, Virginia, and India. He has also
              co-facilitated the annual Breathwork training, &quot;Return To The
              Sacred,&quot; in Sierraville, CA since 2003. Aaron is certified by{" "}
              <a
                href="https://rebirthingbreathwork.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rebirthing Breathwork International
              </a>
              .
            </p>
            <p>
              Aaron finds this work to be most effective through{" "}
              <a href="/services">private one-on-one sessions</a>. He also enjoys
              facilitating group sessions at yoga studios, wellness centers, and
              individual homes.
            </p>
            <p>
              As part of the Respire experience Aaron assists clients to identify
              and release limiting beliefs through the use of positive
              affirmations. He also specializes in spiritual purification
              practices through the sacred use of earth, air, water, and fire.
            </p>
            <p>Aaron welcomes you to experience him as your guide in this transformational process.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
