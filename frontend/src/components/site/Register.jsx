import { useEffect, useState } from "react";
import axios from "axios";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";
import { ProcessCaptcha } from "./ProcessCaptcha";
import { ArrowRight, Check, ShieldCheck, Lock, LineChart, X } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  country: "",
  age_band: "31-45",
  blood_type: "unknown",
  household: "self",
  household_count: 1,
  motivation: "preparedness",
  timeline: "3-6",
  service_tier: "undecided",
  referral: "",
  notes: "",
  consent: false,
};

const ASSURANCE_ICONS = [ShieldCheck, Lock, LineChart];

export const Register = () => {
  const { t, lang } = useLanguage();
  const r = t.register;
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaOpen, setCaptchaOpen] = useState(false);

  const update = (k) => (e) => {
    const v = e && e.target ? e.target.value : e;
    setForm((s) => ({ ...s, [k]: v }));
  };
  const setConsent = (v) => setForm((s) => ({ ...s, consent: v }));

  const showHousehold =
    form.household === "self_partner" ||
    form.household === "family" ||
    form.household === "extended";

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error(r.validationRequired);
      return;
    }
    if (!form.consent) {
      toast.error(r.validationConsent);
      return;
    }
    // Gate the actual submission behind the on-brand CAPTCHA.
    setCaptchaOpen(true);
  };

  const performSubmit = async () => {
    setCaptchaOpen(false);
    setSubmitting(true);
    try {
      const payload = {
        ...form,
        household_count: Number(form.household_count) || 1,
        language: lang,
      };
      await axios.post(`${API}/interest`, payload);
      setSubmitted(true);
      toast.success(r.toastSuccess);
      setForm(INITIAL);
    } catch (err) {
      toast.error(r.toastFail);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      data-testid="register-section"
      className="mc-section bg-[color:var(--mc-canvas)] relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--mc-line)]"
      />
      <div className="mc-container relative">
        {/* Header row */}
        <div className="grid grid-cols-12 gap-x-8 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">{r.eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[34px] md:text-[56px] leading-[1.04] tracking-tight text-[color:var(--mc-secondary)]">
                {r.headingA}{" "}
                <span className="italic text-[color:var(--mc-primary)]">
                  {r.headingB}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[640px] text-[15.5px] leading-relaxed text-[color:var(--mc-muted)]">
                {r.intro}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Assurances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[color:var(--mc-line)] mb-14 md:mb-20">
          {r.assurances.map((a, i) => {
            const Icon = ASSURANCE_ICONS[i] || ShieldCheck;
            return (
              <Reveal key={a.title} delay={i * 80}>
                <div
                  data-testid={`register-assurance-${i}`}
                  className="p-8 lg:p-10 border-b border-r border-[color:var(--mc-line)] md:[&:nth-child(3n)]:border-r-0 min-h-[180px] flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-white border border-[color:var(--mc-line)] flex items-center justify-center text-[color:var(--mc-primary)]">
                      <Icon size={15} strokeWidth={1.6} />
                    </span>
                    <span className="font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-primary)]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[20px] md:text-[22px] tracking-tight text-[color:var(--mc-secondary)]">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--mc-muted)]">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Form card */}
        <form
          data-testid="register-form"
          onSubmit={onSubmit}
          className="bg-white border border-[color:var(--mc-line)]"
        >
            {/* Group: About You */}
            <GroupHeader label={r.groups.about} />
            <Field
              label={r.fields.name}
              value={form.name}
              onChange={update("name")}
              required
              testId="register-input-name"
            />
            <Field
              label={r.fields.email}
              type="email"
              value={form.email}
              onChange={update("email")}
              required
              testId="register-input-email"
            />
            <Field
              label={r.fields.phone}
              hint={r.fields.phoneHint}
              value={form.phone}
              onChange={update("phone")}
              testId="register-input-phone"
            />
            <Field
              label={r.fields.country}
              value={form.country}
              onChange={update("country")}
              testId="register-input-country"
            />

            {/* Group: Personal Profile */}
            <GroupHeader label={r.groups.profile} />
            <SelectField
              label={r.fields.age}
              value={form.age_band}
              onChange={update("age_band")}
              options={r.options.age}
              testId="register-input-age"
            />
            <SelectField
              label={r.fields.bloodType}
              value={form.blood_type}
              onChange={update("blood_type")}
              options={r.options.bloodType}
              testId="register-input-blood"
            />
            <div className="grid grid-cols-12 gap-x-6 py-4 md:py-5 border-b border-[color:var(--mc-line)] items-center px-6 md:px-10 hover:bg-[color:var(--mc-canvas)]/50 transition-colors">
              <label
                htmlFor="register-input-household"
                className="col-span-12 md:col-span-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)] cursor-pointer select-none"
              >
                {r.fields.household}
              </label>
              <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row gap-4 md:items-center">
                <select
                  id="register-input-household"
                  data-testid="register-input-household"
                  value={form.household}
                  onChange={update("household")}
                  className="flex-1 bg-transparent border-0 focus:outline-none text-[16px] text-[color:var(--mc-secondary)] py-2.5 pr-4 cursor-pointer"
                >
                  {r.options.household.map((o) => (
                    <option key={o.v} value={o.v}>
                      {o.l}
                    </option>
                  ))}
                </select>
                {showHousehold && (
                  <label className="flex items-center gap-3 md:pl-4 md:border-l md:border-[color:var(--mc-line)] cursor-text">
                    <span className="font-mono-tab text-[10px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)] select-none">
                      {r.fields.householdCount}
                    </span>
                    <input
                      data-testid="register-input-household-count"
                      type="number"
                      min={1}
                      max={20}
                      value={form.household_count}
                      onChange={update("household_count")}
                      className="w-20 bg-transparent border-b border-[color:var(--mc-line)] focus:outline-none focus:border-[color:var(--mc-primary)] text-[16px] text-[color:var(--mc-secondary)] py-2 text-center cursor-text"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Group: Interest & Timing */}
            <GroupHeader label={r.groups.interest} />
            <SelectField
              label={r.fields.motivation}
              value={form.motivation}
              onChange={update("motivation")}
              options={r.options.motivation}
              testId="register-input-motivation"
            />
            <SelectField
              label={r.fields.timeline}
              value={form.timeline}
              onChange={update("timeline")}
              options={r.options.timeline}
              testId="register-input-timeline"
            />
            <SelectField
              label={r.fields.tier}
              value={form.service_tier}
              onChange={update("service_tier")}
              options={r.options.tier}
              testId="register-input-tier"
            />

            {/* Group: Optional */}
            <GroupHeader label={r.groups.optional} />
            <Field
              label={r.fields.referral}
              hint={r.fields.referralHint}
              value={form.referral}
              onChange={update("referral")}
              testId="register-input-referral"
            />
            <label className="grid grid-cols-12 gap-x-6 py-4 md:py-5 border-b border-[color:var(--mc-line)] px-6 md:px-10 cursor-text hover:bg-[color:var(--mc-canvas)]/50 transition-colors">
              <span className="col-span-12 md:col-span-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)] pt-3 select-none">
                {r.fields.notes}
              </span>
              <textarea
                data-testid="register-input-notes"
                rows={4}
                value={form.notes}
                onChange={update("notes")}
                placeholder={r.fields.notesPlaceholder}
                className="col-span-12 md:col-span-8 bg-transparent border-0 focus:outline-none text-[15.5px] text-[color:var(--mc-secondary)] placeholder:text-[color:var(--mc-muted)]/60 resize-none py-2 cursor-text"
              />
            </label>

            {/* Non-binding terms */}
            <div className="bg-[color:var(--mc-canvas)] border-t border-[color:var(--mc-line)] p-8 md:p-10">
              <div className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary)]">
                {r.terms.eyebrow}
              </div>
              <p className="mt-5 text-[13.5px] leading-[1.75] text-[color:var(--mc-muted)] max-w-[820px]">
                {r.terms.body}
              </p>

              <label
                htmlFor="register-consent"
                className="mt-8 flex items-start gap-4 cursor-pointer group"
              >
                <span className="relative inline-flex mt-[3px] shrink-0">
                  <input
                    id="register-consent"
                    data-testid="register-consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="peer h-5 w-5 appearance-none border border-[color:var(--mc-line)] bg-white checked:bg-[color:var(--mc-primary)] checked:border-[color:var(--mc-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--mc-primary)] transition-colors"
                  />
                  <Check
                    size={13}
                    strokeWidth={3}
                    className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                  />
                </span>
                <span className="text-[13.5px] leading-relaxed text-[color:var(--mc-secondary)] max-w-[720px]">
                  {r.terms.consent}
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-[color:var(--mc-line)]">
              <p className="text-[12px] text-[color:var(--mc-muted)] max-w-[420px] leading-relaxed">
                {r.assurances[1].body}
              </p>
              <button
                type="submit"
                disabled={submitting}
                data-testid="register-submit"
                className="mc-btn mc-btn-primary disabled:opacity-60"
              >
                {submitting ? r.submitting : r.submit}
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
      </div>
      <ProcessCaptcha
        open={captchaOpen}
        onClose={() => setCaptchaOpen(false)}
        onVerified={performSubmit}
      />
      <SuccessModal
        open={submitted}
        onClose={() => setSubmitted(false)}
        r={r}
      />
    </section>
  );
};

const GroupHeader = ({ label }) => (
  <div className="px-6 md:px-10 pt-8 pb-4 border-b border-[color:var(--mc-line)] bg-white">
    <div className="font-mono-tab text-[11px] uppercase tracking-[0.22em] text-[color:var(--mc-primary)]">
      {label}
    </div>
  </div>
);

const Field = ({
  label,
  hint,
  type = "text",
  value,
  onChange,
  required,
  testId,
}) => (
  <label className="grid grid-cols-12 gap-x-6 py-4 md:py-5 border-b border-[color:var(--mc-line)] items-center px-6 md:px-10 cursor-text hover:bg-[color:var(--mc-canvas)]/50 transition-colors">
    <span className="col-span-12 md:col-span-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)] flex items-center gap-3 select-none">
      <span>
        {label}
        {required ? "*" : ""}
      </span>
      {hint && (
        <span className="normal-case tracking-normal text-[10px] text-[color:var(--mc-muted)]/70">
          · {hint}
        </span>
      )}
    </span>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      data-testid={testId}
      className="col-span-12 md:col-span-8 bg-transparent border-0 focus:outline-none text-[16px] text-[color:var(--mc-secondary)] placeholder:text-[color:var(--mc-muted)]/60 py-2.5 cursor-text"
    />
  </label>
);

const SelectField = ({ label, value, onChange, options, testId }) => (
  <label className="grid grid-cols-12 gap-x-6 py-4 md:py-5 border-b border-[color:var(--mc-line)] items-center px-6 md:px-10 cursor-pointer hover:bg-[color:var(--mc-canvas)]/50 transition-colors">
    <span className="col-span-12 md:col-span-4 font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)] select-none">
      {label}
    </span>
    <select
      data-testid={testId}
      value={value}
      onChange={onChange}
      className="col-span-12 md:col-span-8 bg-transparent border-0 focus:outline-none text-[16px] text-[color:var(--mc-secondary)] py-2.5 pr-4 cursor-pointer"
    >
      {options.map((o) => (
        <option key={o.v} value={o.v}>
          {o.l}
        </option>
      ))}
    </select>
  </label>
);


const SuccessModal = ({ open, onClose, r }) => {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      data-testid="register-success"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-8 bg-[color:var(--mc-secondary)]/72 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className="relative w-full max-w-[560px] bg-white border border-[color:var(--mc-line)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]"
        style={{ animation: "successModalIn 340ms cubic-bezier(0.2,0.8,0.2,1) both" }}
      >
        <button
          type="button"
          onClick={onClose}
          data-testid="register-success-close"
          aria-label={r.captcha?.cancel || "Close"}
          className="absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center text-[color:var(--mc-muted)] hover:text-[color:var(--mc-secondary)] hover:bg-[color:var(--mc-canvas)] transition-colors"
        >
          <X size={16} strokeWidth={1.6} />
        </button>

        <div className="px-8 md:px-12 pt-12 pb-8">
          <div className="h-11 w-11 rounded-full bg-[color:var(--mc-primary)] text-white flex items-center justify-center">
            <Check size={20} strokeWidth={2} />
          </div>
          <h3 className="mt-8 font-display text-[28px] md:text-[32px] leading-[1.1] tracking-tight text-[color:var(--mc-secondary)]">
            {r.successTitle}
          </h3>
          <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--mc-muted)]">
            {r.successBody}{" "}
            <span className="text-[color:var(--mc-secondary)]">
              {BRAND.email}
            </span>
            {r.successBodyTail}
          </p>
        </div>

        <div className="px-8 md:px-12 pb-10 pt-2">
          <button
            type="button"
            onClick={onClose}
            data-testid="register-reset"
            className="mc-btn mc-btn-primary"
          >
            {r.reset}
            <ArrowRight size={14} />
          </button>
        </div>

        <style>{`
          @keyframes successModalIn {
            from { opacity: 0; transform: translateY(14px) scale(0.985); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
};
