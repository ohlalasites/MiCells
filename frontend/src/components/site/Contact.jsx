import { useState } from "react";
import axios from "axios";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
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

export const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const ENQUIRY_OPTS = [
    { v: "general", l: t.contact.types.general },
    { v: "investor", l: t.contact.types.investor },
    { v: "information", l: t.contact.types.information },
    { v: "advisory", l: t.contact.types.advisory },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error(t.contact.validationRequired);
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      setSubmitted(true);
      toast.success(t.contact.toastSuccess);
      setForm(INITIAL);
    } catch (err) {
      toast.error(t.contact.toastFail);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="mc-section bg-white relative">
      <div className="mc-container">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <Reveal>
              <h2 className="mt-6 font-display text-[34px] md:text-[56px] leading-[1.04] tracking-tight text-[color:var(--mc-secondary)]">
                {t.contact.headingA}{" "}
                <span className="italic text-[color:var(--mc-primary)]">{t.contact.headingB}</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-[460px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                {t.contact.intro}{" "}
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
                <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">{t.contact.directLabel}</div>
                <a
                  href={`mailto:${BRAND.email}`}
                  data-testid="contact-email-link"
                  className="mt-3 block font-display text-[18px] text-[color:var(--mc-secondary)] hover:text-[color:var(--mc-primary)]"
                >
                  {BRAND.email}
                </a>
              </div>
              <div>
                <div className="font-mono-tab text-[11px] uppercase text-[color:var(--mc-muted)]">{t.contact.locationLabel}</div>
                <p className="mt-3 font-display text-[18px] text-[color:var(--mc-secondary)]">{t.contact.locationValue}</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            {submitted ? (
              <div data-testid="contact-success" className="border border-[color:var(--mc-line)] bg-[color:var(--mc-canvas)] p-10 md:p-14 flex flex-col items-start">
                <div className="h-10 w-10 rounded-full bg-[color:var(--mc-primary)] text-white flex items-center justify-center">
                  <Check size={18} />
                </div>
                <h3 className="mt-8 font-display text-[28px] tracking-tight text-[color:var(--mc-secondary)]">{t.contact.successTitle}</h3>
                <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-[color:var(--mc-muted)]">
                  {t.contact.successBody}{" "}
                  <span className="text-[color:var(--mc-secondary)]">{BRAND.email}</span>
                  {t.contact.successBodyTail}
                </p>
                <button data-testid="contact-reset" onClick={() => setSubmitted(false)} className="mc-btn mc-btn-ghost mt-10">
                  {t.contact.reset}
                </button>
              </div>
            ) : (
              <form data-testid="contact-form" onSubmit={onSubmit} className="border-t border-[color:var(--mc-line)]">
                <Field label={t.contact.fields.name} name="name" testId="contact-input-name" value={form.name} onChange={update("name")} required />
                <Field label={t.contact.fields.organisation} name="organisation" testId="contact-input-organisation" value={form.organisation} onChange={update("organisation")} />
                <Field label={t.contact.fields.email} name="email" type="email" testId="contact-input-email" value={form.email} onChange={update("email")} required />
                <Field label={t.contact.fields.country} name="country" testId="contact-input-country" value={form.country} onChange={update("country")} />
                <SelectField label={t.contact.fields.enquiryType} testId="contact-input-type" value={form.enquiry_type} onChange={update("enquiry_type")} options={ENQUIRY_OPTS} />

                <div className="grid grid-cols-12 gap-x-6 py-6 border-b border-[color:var(--mc-line)]">
                  <label className="col-span-12 md:col-span-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)] pt-3">
                    {t.contact.fields.message}
                  </label>
                  <textarea
                    data-testid="contact-input-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder={t.contact.fields.messagePlaceholder}
                    className="col-span-12 md:col-span-8 bg-transparent border-0 focus:outline-none text-[15.5px] text-[color:var(--mc-secondary)] placeholder:text-[color:var(--mc-muted)]/60 resize-none"
                  />
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <p className="text-[12px] text-[color:var(--mc-muted)] max-w-[420px] leading-relaxed">
                    {t.contact.disclaimer}
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="contact-submit"
                    className="mc-btn mc-btn-primary disabled:opacity-60"
                  >
                    {submitting ? t.contact.submitting : t.contact.submit}
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
      {label}{required ? "*" : ""}
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
        <option key={o.v} value={o.v}>{o.l}</option>
      ))}
    </select>
  </div>
);
