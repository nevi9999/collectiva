"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const router = useRouter();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError("Οι κωδικοί δεν ταιριάζουν");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες");
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
        setSuccess("Το λογαριασμό σου δημιουργήθηκε επιτυχώς! Τώρα μπορείς να συνδεθείς.");
        setTimeout(() => {
          router.push("/sign-in");
        }, 2000);
      } else {
        setError(data.error || "Κάτι πήγε στραβά. Προσπάθησε ξανά.");
      }
    } catch (error) {
      setError("Σφάλμα σύνδεσης. Έλεγξε τη σύνδεσή σου στο διαδίκτυο.");
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
      
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <span className="text-4xl">✊</span>
          </div>
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl">🏛️</span>
            <h1 className="text-2xl font-bold text-red-700">Collectiva</h1>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Ένωσε τη Φωνή σου</h2>
          <p className="text-gray-600">Γίνε μέρος του κινήματος αλληλεγγύης</p>
        </div>

        {/* Revolutionary Quote */}
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
          <p className="text-red-800 italic text-sm">
            "Η αληθινή επανάσταση αρχίζει όταν αποφασίζουμε να δράσουμε συλλογικά για την αλλαγή που θέλουμε να δούμε στον κόσμο."
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-xl border border-red-200 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white text-center">
            <h3 className="text-xl font-semibold">Δημιούργησε Λογαριασμό</h3>
            <p className="text-red-100 text-sm mt-1">Κάθε φωνή μετράει στον αγώνα</p>
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
                  🎭 Ποιος είσαι στον αγώνα;
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
                      <span className="text-2xl block mb-1">❤️</span>
                      <span className="font-semibold text-sm">Υποστηρικτής</span>
                      <p className="text-xs text-gray-500 mt-1">Στηρίζω οργανώσεις</p>
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
                      <span className="text-2xl block mb-1">🏢</span>
                      <span className="font-semibold text-sm">Οργάνωση</span>
                      <p className="text-xs text-gray-500 mt-1">Αγωνίζομαι καθημερινά</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  👤 Όνομα / Οργάνωση
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Το όνομά σου ή της οργάνωσής σου"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  ✉️ Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="το-email@σου.gr"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  🔒 Κωδικός
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Τουλάχιστον 6 χαρακτήρες"
                />
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  🔒 Επιβεβαίωση Κωδικού
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Επανάλαβε τον κωδικό"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg"
              >
                {loading ? "⌛ Εγγραφή..." : "🚩 Ενώνομαι στον Αγώνα"}
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Έχεις ήδη λογαριασμό;{" "}
                <Link href="/sign-in" className="text-red-600 hover:text-red-700 font-semibold">
                  Σύνδεση εδώ
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Δημιουργώντας λογαριασμό, συμφωνείς με τους{" "}
            <Link href="/terms" className="text-red-600 hover:underline">όρους χρήσης</Link>{" "}
            και την{" "}
            <Link href="/privacy" className="text-red-600 hover:underline">πολιτική απορρήτου</Link>
          </p>
          <p className="text-gray-400 text-xs mt-2">
            ✊ Από την Εξάρχεια με αλληλεγγύη
          </p>
        </div>
      </div>
    </div>
  );
}
