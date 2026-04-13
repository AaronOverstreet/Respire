import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

export function PrivacyPage() {
  return (
    <Section>
      <Container>
        <h1 className="page-title">Privacy Policy</h1>
        <div className="prose legal-page">
          <p>
            The privacy of our visitors is of extreme importance to us. This
            privacy policy outlines the types of personal information received
            and collected by our site and how it is used.
          </p>

          <h2>Google Analytics</h2>
          <p>
            Our site makes use of Google Analytics which allows us to view a
            variety of reports about how our visitors interact with our website
            so that we can continuously improve our website and how our
            visitors find us.
          </p>
          <p>
            Google Analytics collects information anonymously. Analytics uses its
            own set of cookies to track visitor interactions. These cookies are
            used to store information such as your IP (internet protocol)
            address, your ISP (internet service provider), the browser you used
            to visit our site (such as Internet Explorer, Firefox or Google
            Chrome), the time you have spent on our site, at what time your
            visit occurred and whether you have been to our site before, what
            site referred you to a particular web page on our site and which
            pages you have visited throughout your stay on our site.
          </p>
          <p>
            This information is solely used to analyze trends, administer the
            site, track users movement and gather broad demographic information
            for internal use. Most importantly, any recorded IP addresses are
            NOT linked to personally identifiable information.
          </p>

          <h2>Cookies from third party websites &amp; external links</h2>
          <p>
            To support our site we may use advertisements in form of banners,
            affiliate links and recommendations of specific services from third
            party advertisers. Some of these advertisers may use technology such
            as cookies and web beacons when they advertise on our site which
            will also send these advertising agencies information that may
            include your IP address, your ISP, the browser you used to visit our
            site, and in some cases whether you have the Flash technology
            installed on your computer.
          </p>
          <p>
            Providing such information to advertisers is generally used for
            ad-targeting purposes which includes showing relevant ads on the
            basis of our visitors&apos; geographical location (geotargeting) or
            showing certain ads based on the history of our visitors&apos; web
            activity prior to coming to our site. RespireBreathwork.com contains
            external links to other websites.
          </p>
          <p>
            We are NOT held responsible for privacy violation practices on
            third party sites however, in case such practices have been detected
            by us these sites will be unlinked from our site immediately.
          </p>

          <h2>Opt-in information</h2>
          <p>
            If you decide to opt in for our mailing list by providing us your
            name and email address this information will be solely used by us for
            contacting you for our site updates and occasional product or service
            recommendations. Your personal information will NOT be distributed
            to anyone else under any circumstances.
          </p>

          <h2>Proprietary rights</h2>
          <p>
            All information found on this website is the property of
            RespireBreathwork.com. If you want to copy some material from our website
            for public distribution you are required to ask our permission prior
            to doing so. This does not include the information you may decide to
            keep for your personal reference on your local computer.
          </p>

          <h2>Confidentiality</h2>
          <p>
            We guarantee full confidentiality of any sensitive information
            transmitted to us.
          </p>
          <p>
            Note, any information submitted to us such as product reviews, tips
            and/or recommendations are considered by us non-confidential and
            therefore with your permission may be published on our site.
          </p>

          <h2>Site security</h2>
          <p>
            RespireBreathwork.com has the appropriate security software installed to
            ensure a safe stay on our site for our visitors.
          </p>

          <h2>Deleting or disallowing cookies</h2>
          <p>
            You can choose to disable or selectively turn off our cookies or
            third-party cookies in your browser settings or by managing
            preferences in your Internet security program. However, this can
            affect how you are able to interact with our site as well as other
            websites. This could include the inability to login to services or
            programs, such as logging into your account in a members only area
            on our site.
          </p>
          <p>
            Please note, deleting cookies in your web browser does not mean you
            are permanently opted out of any advertising program running on our
            site. Unless you manipulate settings that disallow cookies, the next
            time you visit our site a new cookie will be added.
          </p>

          <h2>Changes to this privacy policy</h2>
          <p>
            The contents of this privacy statement may be altered at any time
            at our own discretion. If you have any questions regarding our
            privacy policy please, don&apos;t hesitate to contact us via our{" "}
            <Link to="/contact">contact page</Link>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
