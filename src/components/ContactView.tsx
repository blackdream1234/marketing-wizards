import { FormEvent, useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { Language, SiteContent } from '../types';

interface ContactViewProps {
  language: Language;
  content: SiteContent;
  prefilledSubject?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  service: string;
  source: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactView({ language, content, prefilledSubject }: ContactViewProps) {
  const { contactPage } = content;
  const { fields, errors: errorLabels, success } = contactPage;
  const localizedAddress = language === 'fr' ? CONTACT_INFO.addressFr : CONTACT_INFO.addressEn;

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    service: fields.serviceOptions[0],
    source: fields.sourceOptions[0],
    message: prefilledSubject ? `${prefilledSubject} — ` : '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  // Sync default select values when language switches
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      service: fields.serviceOptions.includes(prev.service)
        ? prev.service
        : fields.serviceOptions[0],
      source: fields.sourceOptions.includes(prev.source)
        ? prev.source
        : fields.sourceOptions[0],
    }));
  }, [fields.serviceOptions, fields.sourceOptions]);

  useEffect(() => {
    if (prefilledSubject) {
      setSubmitted(null);
      setForm((prev) => ({
        ...prev,
        message: prev.message.includes(prefilledSubject)
          ? prev.message
          : `${prefilledSubject} — ${prev.message}`.trim(),
      }));
    }
  }, [prefilledSubject]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = errorLabels.nameRequired;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = errorLabels.emailInvalid;
    }
    const digitCount = form.phone.replace(/\D/g, '').length;
    if (digitCount < 7) {
      nextErrors.phone = errorLabels.phoneInvalid;
    }
    if (form.message.trim().length < 15) {
      nextErrors.message = errorLabels.messageShort;
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted({ ...form });
    }
  };

  const handleReset = () => {
    setSubmitted(null);
    setErrors({});
    setForm({
      name: '',
      email: '',
      phone: '',
      postalCode: '',
      service: fields.serviceOptions[0],
      source: fields.sourceOptions[0],
      message: '',
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-200/80 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#1D4ED8] mb-3">{contactPage.kicker}</p>
            <h1
              className="font-display font-bold tracking-tight text-[#0B1221] leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              {contactPage.heading}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {contactPage.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* Main Split: Contact Details + Validated Form */}
      <section className="py-16 lg:py-20 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Direct Channels */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-white border border-slate-200 rounded-xl p-7 space-y-6">
                <h2 className="text-lg font-bold text-[#0B1221]">{contactPage.directHeading}</h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{contactPage.emailLabel}</p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="font-medium text-[#0B1221] hover:text-[#1D4ED8] transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{contactPage.phoneLabel}</p>
                      <a
                        href={CONTACT_INFO.phoneHref}
                        className="font-mono font-medium text-[#0B1221] hover:text-[#1D4ED8] transition-colors tabular-nums"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{contactPage.officeLabel}</p>
                      <p className="font-medium text-[#0B1221] leading-relaxed">
                        {localizedAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 space-y-3 text-sm">
                  <div>
                    <p className="text-xs text-slate-500">{contactPage.hoursLabel}</p>
                    <p className="font-medium text-[#0B1221] mt-0.5">{contactPage.hoursValue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{contactPage.languagesLabel}</p>
                    <p className="font-medium text-[#0B1221] mt-0.5">
                      {contactPage.languagesValue}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">ICE</p>
                    <p className="font-mono text-xs font-medium text-[#0B1221] mt-0.5 tabular-nums">
                      {CONTACT_INFO.ice}
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: Lead Capture Form or Confirmation State */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-200 rounded-xl p-7 sm:p-10">
                {submitted ? (
                  <div className="space-y-6" role="status" aria-live="polite">
                    <div className="flex items-start gap-3 text-emerald-700">
                      <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h2 className="text-2xl font-bold text-[#0B1221]">{success.heading}</h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-1.5 leading-relaxed">
                          {success.body}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#FAFBFC] border border-slate-200 rounded-lg p-6 space-y-3 text-sm">
                      <h3 className="text-xs font-semibold text-slate-500">
                        {success.summaryTitle}
                      </h3>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <dt className="text-xs text-slate-500">{fields.name}</dt>
                          <dd className="font-medium text-[#0B1221]">{submitted.name}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">{fields.email}</dt>
                          <dd className="font-medium text-[#0B1221]">{submitted.email}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">{fields.phone}</dt>
                          <dd className="font-mono text-[#0B1221] tabular-nums">
                            {submitted.phone}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">{fields.service}</dt>
                          <dd className="font-medium text-[#0B1221]">{submitted.service}</dd>
                        </div>
                      </dl>
                      <div className="pt-3 border-t border-slate-200">
                        <dt className="text-xs text-slate-500 mb-1">{fields.message}</dt>
                        <dd className="text-slate-700 leading-relaxed">{submitted.message}</dd>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-sm font-medium text-[#0B1221] border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    >
                      {success.resetButton}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight text-[#0B1221]">
                      {contactPage.formHeading}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-[#0B1221] mb-1.5"
                        >
                          {fields.name} <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder={fields.namePlaceholder}
                          aria-invalid={Boolean(errors.name)}
                          className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg text-[#0B1221] placeholder:text-slate-400 transition-colors ${
                            errors.name
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-slate-300 focus:border-[#1D4ED8]'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-[#0B1221] mb-1.5"
                        >
                          {fields.email} <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder={fields.emailPlaceholder}
                          aria-invalid={Boolean(errors.email)}
                          className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg text-[#0B1221] placeholder:text-slate-400 transition-colors ${
                            errors.email
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-slate-300 focus:border-[#1D4ED8]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium text-[#0B1221] mb-1.5"
                        >
                          {fields.phone} <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => {
                            setForm({ ...form, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder={fields.phonePlaceholder}
                          aria-invalid={Boolean(errors.phone)}
                          className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg text-[#0B1221] placeholder:text-slate-400 transition-colors ${
                            errors.phone
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-slate-300 focus:border-[#1D4ED8]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Postal / Zip Code */}
                      <div>
                        <label
                          htmlFor="contact-postal"
                          className="block text-sm font-medium text-[#0B1221] mb-1.5"
                        >
                          {fields.postalCode}
                        </label>
                        <input
                          id="contact-postal"
                          type="text"
                          value={form.postalCode}
                          onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                          placeholder={fields.postalCodePlaceholder}
                          className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 focus:border-[#1D4ED8] rounded-lg text-[#0B1221] placeholder:text-slate-400 transition-colors"
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-sm font-medium text-[#0B1221] mb-1.5"
                        >
                          {fields.service}
                        </label>
                        <select
                          id="contact-service"
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 focus:border-[#1D4ED8] rounded-lg text-[#0B1221] transition-colors"
                        >
                          {fields.serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Referral Source */}
                      <div>
                        <label
                          htmlFor="contact-source"
                          className="block text-sm font-medium text-[#0B1221] mb-1.5"
                        >
                          {fields.source}
                        </label>
                        <select
                          id="contact-source"
                          value={form.source}
                          onChange={(e) => setForm({ ...form, source: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 focus:border-[#1D4ED8] rounded-lg text-[#0B1221] transition-colors"
                        >
                          {fields.sourceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-[#0B1221] mb-1.5"
                      >
                        {fields.message} <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder={fields.messagePlaceholder}
                        aria-invalid={Boolean(errors.message)}
                        className={`w-full px-4 py-3 text-sm bg-white border rounded-lg text-[#0B1221] placeholder:text-slate-400 transition-colors resize-y ${
                          errors.message
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-slate-300 focus:border-[#1D4ED8]'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-6 py-3.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {fields.submit}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
