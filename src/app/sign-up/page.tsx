"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SolidarityIcon } from "@/components/ui/solidarity-icon";
import { CauseIcon } from "@/components/ui/cause-icon";

export default function SignUpPage() {
  const router = useRouter();
  const [language, setLanguage] = useState<'en' | 'gr'>('en');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "DONOR"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Translation content
  const content = {
    en: {
      // Header
      joinVoice: "Join Your Voice",
      bePartOfMovement: "Be part of the solidarity movement",
      
      // Quote
      revolutionQuote: "True revolution begins when we decide to act collectively for the change we want to see in the world.",
      
      // Form
      createAccount: "Create Account",
      everyVoiceCounts: "Every voice counts in the struggle",
      whoAreYou: "Who are you in the struggle?",
      supporter: "Supporter",
      supportOrgs: "I support organizations",
      organization: "Organization", 
      fightDaily: "I fight daily",
      nameOrg: "Name / Organization",
      namePlaceholder: "Your name or organization's name",
      email: "Email",
      emailPlaceholder: "your-email@domain.com",
      password: "Password",
      passwordPlaceholder: "At least 6 characters",
      confirmPassword: "Confirm Password",
      confirmPasswordPlaceholder: "Repeat the password",
      joiningStruggle: "Joining the Struggle",
      registering: "Registering...",
      
      // Links and footer
      alreadyHaveAccount: "Already have an account?",
      signInHere: "Sign in here",
      termsAgreement: "By creating an account, you agree to our",
      terms: "terms of use",
      and: "and",
      privacy: "privacy policy",
      fromExarchia: "From Exarchia with solidarity",
      
      // Error messages
      passwordsDontMatch: "Passwords don't match",
      passwordTooShort: "Password must be at least 6 characters",
      accountCreated: "Your account was created successfully! Now you can sign in.",
      somethingWrong: "Something went wrong. Please try again.",
      connectionError: "Connection error. Check your internet connection."
    },
    gr: {
      // Header
      joinVoice: "Ένωσε τη Φωνή σου",
      bePartOfMovement: "Γίνε μέρος του κινήματος αλληλεγγύης",
      
      // Quote
      revolutionQuote: "Η αληθινή επανάσταση αρχίζει όταν αποφασίζουμε να δράσουμε συλλογικά για την αλλαγή που θέλουμε να δούμε στον κόσμο.",
      
      // Form
      createAccount: "Δημιούργησε Λογαριασμό",
      everyVoiceCounts: "Κάθε φωνή μετράει στον αγώνα",
      whoAreYou: "Ποιος είσαι στον αγώνα;",
      supporter: "Υποστηρικτής",
      supportOrgs: "Στηρίζω οργανώσεις",
      organization: "Οργάνωση",
      fightDaily: "Αγωνίζομαι καθημερινά",
      nameOrg: "Όνομα / Οργάνωση",
      namePlaceholder: "Το όνομά σου ή της οργάνωσής σου",
      email: "Email",
      emailPlaceholder: "το-email@σου.gr",
      password: "Κωδικός",
      passwordPlaceholder: "Τουλάχιστον 6 χαρακτήρες",
      confirmPassword: "Επιβεβαίωση Κωδικού",
      confirmPasswordPlaceholder: "Επανάλαβε τον κωδικό",
      joiningStruggle: "Ενώνομαι στον Αγώνα",
      registering: "Εγγραφή...",
      
      // Links and footer
      alreadyHaveAccount: "Έχεις ήδη λογαριασμό;",
      signInHere: "Σύνδεση εδώ",
      termsAgreement: "Δημιουργώντας λογαριασμό, συμφωνείς με τους",
      terms: "όρους χρήσης",
      and: "και την",
      privacy: "πολιτική απορρήτου",
      fromExarchia: "Από τα Εξάρχεια με αλληλεγγύη",
      
      // Error messages
      passwordsDontMatch: "Οι κωδικοί δεν ταιριάζουν",
      passwordTooShort: "Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες",
      accountCreated: "Το λογαριασμό σου δημιουργήθηκε επιτυχώς! Τώρα μπορείς να συνδεθείς.",
      somethingWrong: "Κάτι πήγε στραβά. Προσπάθησε ξανά.",
      connectionError: "Σφάλμα σύνδεσης. Έλεγξε τη σύνδεσή σου στο διαδίκτυο."
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError(t.passwordsDontMatch);
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError(t.passwordTooShort);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(t.accountCreated);
        setTimeout(() => {
          router.push("/sign-in");
        }, 2000);
      } else {
        setError(data.error || t.somethingWrong);
      }
    } catch (error) {
      setError(t.connectionError);
    }

    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmVmM2YyIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-20"></div>
      
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          onClick={() => setLanguage(language === 'en' ? 'gr' : 'en')}
          variant="outline"
          size="sm"
          className="bg-white/90 hover:bg-white border-red-200 text-red-700 hover:text-red-800"
        >
          {language === 'en' ? '🇬🇷 ΕΛ' : '🇬🇧 EN'}
        </Button>
      </div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-full p-4 shadow-xl">
              <SolidarityIcon type="fist" size="xl" color="white" />
            </div>
          </div>
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <SolidarityIcon type="building" size="md" color="red" />
            <h1 className="text-2xl font-bold text-red-700">Collectiva</h1>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.joinVoice}</h2>
          <p className="text-gray-600">{t.bePartOfMovement}</p>
        </div>

        {/* Revolutionary Quote */}
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
          <p className="text-red-800 italic text-sm">
            "{t.revolutionQuote}"
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-xl border border-red-200 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white text-center">
            <h3 className="text-xl font-semibold">{t.createAccount}</h3>
            <p className="text-red-100 text-sm mt-1">{t.everyVoiceCounts}</p>
          </div>
          
          <div className="p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.whoAreYou}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                    formData.role === "DONOR" 
                      ? "border-red-500 bg-red-50 text-red-700" 
                      : "border-gray-200 hover:border-red-300"
                  }`}>
                    <input
                      type="radio"
                      name="role"
                      value="DONOR"
                      checked={formData.role === "DONOR"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <SolidarityIcon type="heart" size="lg" color="red" />
                      </div>
                      <span className="font-semibold text-sm">{t.supporter}</span>
                      <p className="text-xs text-gray-500 mt-1">{t.supportOrgs}</p>
                    </div>
                  </label>
                  
                  <label className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                    formData.role === "ORGANIZATION" 
                      ? "border-red-500 bg-red-50 text-red-700" 
                      : "border-gray-200 hover:border-red-300"
                  }`}>
                    <input
                      type="radio"
                      name="role"
                      value="ORGANIZATION"
                      checked={formData.role === "ORGANIZATION"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <SolidarityIcon type="building" size="lg" color="red" />
                      </div>
                      <span className="font-semibold text-sm">{t.organization}</span>
                      <p className="text-xs text-gray-500 mt-1">{t.fightDaily}</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.nameOrg}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder={t.namePlaceholder}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.password}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder={t.passwordPlaceholder}
                />
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.confirmPassword}
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder={t.confirmPasswordPlaceholder}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg"
              >
                {loading ? t.registering : t.joiningStruggle}
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {t.alreadyHaveAccount}{" "}
                <Link href="/sign-in" className="text-red-600 hover:text-red-700 font-semibold">
                  {t.signInHere}
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            {t.termsAgreement}{" "}
            <Link href="/terms" className="text-red-600 hover:underline">{t.terms}</Link>{" "}
            {t.and}{" "}
            <Link href="/privacy" className="text-red-600 hover:underline">{t.privacy}</Link>
          </p>
          <p className="text-gray-400 text-xs mt-2">
            {t.fromExarchia}
          </p>
        </div>
      </div>
    </div>
  );
}
