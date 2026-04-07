const CALENDLY = "https://calendly.com/overstreetaaron";

export function BookingStrip() {
  return (
    <div className="booking-strip surface-card" id="book">
      <h2 className="booking-strip__title">Sessions &amp; booking</h2>
      <p>
        Offering in-person sessions in the Portland area and{" "}
        <strong>Zoom sessions worldwide</strong>. For a free 15-minute
        meet-and-greet, appointments, and questions, book online or reach out via
        the contact page.
      </p>
      <div className="booking-strip__actions">
        <a className="btn btn--primary" href={CALENDLY}>
          Book with Calendly
        </a>
        <a className="btn btn--ghost" href={`${CALENDLY}#consult`}>
          15-minute consult
        </a>
      </div>
    </div>
  );
}
