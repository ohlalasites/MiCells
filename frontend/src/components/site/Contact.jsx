import { useState } from "react";
import axios from "axios";
import { BRAND } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL = {
  name: "",
  organisation: "",
  email: "",
  country: "",
  message: "",
  enquiry_type: "general",
};

const ENQUIRY_OPTS = [
  { v: "general", l: "General Enquiry" },
  { v: "investor", l: "Investor Information" },
  { v: "information", l: "Service Information" },
  { v: "advisory", l: "Advisory / Partnership" },
];

export const Contact = () => {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      setSubmitted(true);
      toast.success("Enquiry received. Our team will respond from info@micells.io.");
      setForm(INITIAL);
    } catch (err) {
      const msg = err?.response?.data?.detail || "Unable to submit enquiry. Please try again or email info@micells.io directly.";
      toast.error(typeof msg === "string" ? msg : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="mc-section bg-white relative"
    >
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow">08 · Contact</div>
            <Reveal>
              <h2 className="mt-6 font-display text-[34px] md:text-[56px] leading-[1.04] tracking-tight text-[color:var(--mc-secondary)]">
                Speak with{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  MiCells.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-[460px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                Enquiries are handled in confidence. A member of the MiCells
                team will respond from{" "}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-[color:var(--mc-secondary)] underline decoration-[color:var(--mc-primary)] underline-offset-4"
                >
                  {BRAND.email}
                </a>
                .
              </p>
            </Reveal>

            <div className="mt-12 border-t border-[color:var(--mc-line)] pt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
                  Direct
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  data-testid="contact-email-link"
                  className="mt-3 block font-display text-[18px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
                >
                  {BRAND.email}
                </a>
              </div>
              <div>
                <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">
                  Location
                </div>
                <p className="mt-3 font-display text-[18px] text-[color:var(--mc-secondary)]">
                  Hong Kong SAR
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            {submitted ? (
              <div
                data-testid="contact-success"
                className="border border-[color:var(--mc-line)] bg-[color:var(--mc-canvas)] p-10 md:p-14 flex flex-col items-start"
              >
                <div className="h-10 w-10 rounded-full bg-[color:var(--mc-primary)] text-white flex items-center justify-center">
                  <Check size={18} />
                </div>
                <h3 className="mt-8 font-display text-[28px] tracking-tight text-[color:var(--mc-secondary)]">
                  Enquiry received.
                </h3>
                <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-[color:var(--mc-muted)]">
                  Thank you for contacting MiCells. A member of our team will
                  respond from{" "}
                  <span className="text-[color:var(--mc-secondary)]">
                    {BRAND.email}
                  </span>
                  . If your enquiry is time-sensitive, please email us
                  directly.
                </p>
                <button
                  data-testid="contact-reset"
                  onClick={() => setSubmitted(false)}
                  className="mc-btn mc-btn-ghost mt-10"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                data-testid="contact-form"
                onSubmit={onSubmit}
                className="border-t border-[color:var(--mc-line)]"
              >
                <Field
                  label="Name"
                  name="name"
                  testId="contact-input-name"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
                <Field
                  label="Organisation"
                  name="organisation"
                  testId="contact-input-organisation"
                  value={form.organisation}
                  onChange={update("organisation")}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  testId="contact-input-email"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
                <Field
                  label="Country"
                  name="country"
                  testId="contact-input-country"
                  value={form.country}
                  onChange={update("country")}
                />

                <SelectField
                  label="Enquiry Type"
                  testId="contact-input-type"
                  value={form.enquiry_type}
                  onChange={update("enquiry_type")}
                  options={ENQUIRY_OPTS}
                />

                <div className="grid grid-cols-12 gap-x-6 py-6 border-b border-[color:var(--mc-line)]">
                  <label className="col-span-12 md:col-span-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)] pt-3">
                    Message
                  </label>
                  <textarea
                    data-testid="contact-input-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Briefly describe the nature of your enquiry."
                    className="col-span-12 md:col-span-8 bg-transparent border-0 focus:outline-none text-[15.5px] text-[color:var(--mc-secondary)] placeholder:text-[color:var(--mc-muted)]/60 resize-none"
                  />
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <p className="text-[12px] text-[color:var(--mc-muted)] max-w-[420px] leading-relaxed">
                    By submitting, you consent to MiCells contacting you in
                    relation to this enquiry. We do not share enquirer details
                    with third parties.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="contact-submit"
                    className="mc-btn mc-btn-primary disabled:opacity-60"
                  >
                    {submitting ? "Submitting…" : "Send Enquiry"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", value, onChange, required, testId }) => (
  <div className="grid grid-cols-12 gap-x-6 py-6 border-b border-[color:var(--mc-line)] items-baseline">
    <label
      htmlFor={name}
      className="col-span-12 md:col-span-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)]"
    >
      {label}
      {required ? "*" : ""}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      data-testid={testId}
      className="col-span-12 md:col-span-8 bg-transparent border-0 focus:outline-none text-[16px] text-[color:var(--mc-secondary)] placeholder:text-[color:var(--mc-muted)]/60 py-1"
    />
  </div>
);

const SelectField = ({ label, value, onChange, options, testId }) => (
  <div className="grid grid-cols-12 gap-x-6 py-6 border-b border-[color:var(--mc-line)] items-baseline">
    <label className="col-span-12 md:col-span-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)]">
      {label}
    </label>
    <select
      data-testid={testId}
      value={value}
      onChange={onChange}
      className="col-span-12 md:col-span-8 bg-transparent border-0 focus:outline-none text-[16px] text-[color:var(--mc-secondary)] py-1 pr-4 cursor-pointer"
    >
      {options.map((o) => (
        <option key={o.v} value={o.v}>
          {o.l}
        </option>
      ))}
    </select>
  </div>
);
