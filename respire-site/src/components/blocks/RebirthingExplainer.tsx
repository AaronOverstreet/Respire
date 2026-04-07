import { BenefitsList } from "./BenefitsList";

export function RebirthingExplainer() {
  return (
    <div className="rebirthing-explainer">
      <h2 className="rebirthing-explainer__title">What is rebirthing breathwork?</h2>
      <div className="rebirthing-explainer__grid">
        <div className="prose">
          <p>
            Rebirthing breathwork is a simple yet powerful healing modality. It
            helps release stored negative emotions and traumatic memories, manage
            stress, and create deep, lasting relaxation.
          </p>
          <p>
            When we experience difficult events, we don’t always have the
            capacity to fully process them. Unfelt emotions can remain in the
            body and subconscious, contributing to stress, relationship
            patterns, or illness. The breath is a tool of resolution: it helps us
            connect with what is ready to heal and release it, so we can live
            more freely as ourselves.
          </p>
          <p>
            Sessions can be held in person or online via Zoom—so you can work
            with Aaron wherever you are.
          </p>
        </div>
        <div>
          <h3 className="rebirthing-explainer__benefits-title">
            Benefits of rebirthing breathwork
          </h3>
          <BenefitsList />
        </div>
      </div>
    </div>
  );
}
