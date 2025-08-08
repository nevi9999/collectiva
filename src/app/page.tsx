"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SolidarityIcon } from "@/components/ui/solidarity-icon"
import { CauseIcon } from "@/components/ui/cause-icon"

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'gr'>('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gr' : 'en')
  }

  const content = {
    en: {
      tagline: "from Exarchia",
      signIn: "Sign In", 
      participate: "Join Us",
      heroTitle: "Solidarity is our",
      heroSubtitle: "Weapon",
      heroDescription: "From the heart of Exarchia, we create a solidarity network that supports NGOs, volunteer organizations, and social movements fighting for justice, equality, and social liberation.",
      heroQuote: "Only collective action can break the chains of oppression. Every euro you give is a stone in the building of social change.",
      joinVoice: "🚩 Join the Movement",
      findOrgs: "🏢 Find Organizations",
      valuesTitle: "Our Values",
      solidarity: "Solidarity",
      solidarityDesc: "We support the vulnerable, protect refugees, and give voice to those who have none.",
      socialJustice: "Social Justice", 
      socialJusticeDesc: "We fight for a world where equality and justice are not privileges but rights.",
      collectiveAction: "Collective Action",
      collectiveActionDesc: "Together we are stronger. Each contribution joins with thousands of others to create real change.",
      howItWorksTitle: "How Solidarity Works",
      howItWorksSubtitle: "Three simple steps to become part of the movement",
      chooseStruggles: "Choose Your Struggles",
      chooseStrugglesDesc: "Select organizations fighting for your ideals. Create your personal solidarity portfolio.",
      continuousSupport: "Continuous Support", 
      continuousSupportDesc: "Set up monthly contributions that automatically support the struggles you've chosen. Stability gives strength.",
      seeChange: "See the Change",
      seeChangeDesc: "Track how your contribution transforms into real results. Change becomes visible.",
      exarchiaTitle: "From Exarchia to the World",
      exarchiaDesc: "Born in the neighborhood that lived through the Polytechnic uprising, that hosts refugees, that resists oppression. Collectiva brings the spirit of Exarchia to digital solidarity.",
      exarchiaQuote: "Here where walls speak of freedom, where every graffiti is a manifesto, we create the platform that will bring solidarity everywhere.",
      ctaTitle: "Ready to Change the World?",
      ctaDesc: "Unite your voice with thousands of others fighting for social justice.",
      startNow: "✊ Start Now",
      explore: "🔍 Explore Organizations",
      platformSection: "Platform",
      organizations: "Organizations",
      challenges: "Challenges", 
      dashboard: "Dashboard",
      communitySection: "Community",
      aboutUs: "About Us",
      manifesto: "Manifesto",
      contact: "Contact",
      legalSection: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      transparency: "Transparency",
      footerCopyright: "Created with solidarity in Exarchia, Athens. ✊",
      footerTagline: "For every person who struggles, for every dream of freedom."
    },
    gr: {
      tagline: "από τα Εξάρχεια",
      signIn: "Σύνδεση",
      participate: "Συμμετοχή", 
      heroTitle: "Η Αλληλεγγύη είναι το",
      heroSubtitle: "Όπλο μας",
      heroDescription: "Από την καρδιά των Εξαρχείων, δημιουργούμε ένα δίκτυο αλληλεγγύης που στηρίζει τις ΜΚΟ, τα εθελοντικά σωματεία και τις κοινωνικές οργανώσεις που αγωνίζονται για δικαιοσύνη, ισότητα και κοινωνική απελευθέρωση.",
      heroQuote: "Μόνο η συλλογική δράση μπορεί να σπάσει τις αλυσίδες της καταπίεσης. Κάθε ευρώ που δίνεις είναι μια πέτρα στο οικοδόμημα της κοινωνικής αλλαγής.",
      joinVoice: "🚩 Ενώνω τη Φωνή μου",
      findOrgs: "🏢 Βρες Οργανώσεις",
      valuesTitle: "Οι Αξίες μας",
      solidarity: "Αλληλεγγύη",
      solidarityDesc: "Στηρίζουμε τους αδύναμους, προστατεύουμε τους πρόσφυγες, και δίνουμε φωνή σε όσους δεν έχουν.",
      socialJustice: "Κοινωνική Δικαιοσύνη",
      socialJusticeDesc: "Αγωνιζόμαστε για ένα κόσμο όπου η ισότητα και η δικαιοσύνη δεν είναι προνόμια αλλά δικαιώματα.",
      collectiveAction: "Συλλογική Δράση",
      collectiveActionDesc: "Μαζί είμαστε πιο δυνατοί. Κάθε συνεισφορά ενώνεται με χιλιάδες άλλες για να δημιουργήσει πραγματική αλλαγή.",
      howItWorksTitle: "Πώς Λειτουργεί η Αλληλεγγύη",
      howItWorksSubtitle: "Τρία απλά βήματα για να γίνεις μέρος του κινήματος",
      chooseStruggles: "Διάλεξε τους Αγώνες σου",
      chooseStrugglesDesc: "Επέλεξε τις οργανώσεις που παλεύουν για τα ιδεανικά σου. Δημιούργησε το προσωπικό σου χαρτοφυλάκιο αλληλεγγύης.",
      continuousSupport: "Συνεχής Στήριξη",
      continuousSupportDesc: "Ρύθμισε μηνιαίες συνεισφορές που στηρίζουν αυτόματα τους αγώνες που έχεις επιλέξει. Η σταθερότητα δίνει δύναμη.",
      seeChange: "Βλέπε την Αλλαγή", 
      seeChangeDesc: "Παρακολούθησε πώς η συνεισφορά σου μετατρέπεται σε πραγματικά αποτελέσματα. Η αλλαγή γίνεται ορατή.",
      exarchiaTitle: "Από τα Εξάρχεια για τον Κόσμο",
      exarchiaDesc: "Γεννημένη στη γειτονιά που έζησε την εξέγερση του Πολυτεχνείου, που φιλοξενεί πρόσφυγες, που αντιστέκεται στην καταπίεση. Η Collectiva φέρνει το πνεύμα των Εξαρχείων στην ψηφιακή αλληλεγγύη.",
      exarchiaQuote: "Εδώ που οι τοίχοι μιλούν για ελευθερία, όπου κάθε γκράφιτι είναι ένα μανιφέστο, δημιουργούμε την πλατφόρμα που θα φέρει την αλληλεγγύη παντού.",
      ctaTitle: "Έτοιμος να Αλλάξεις τον Κόσμο;",
      ctaDesc: "Ένωσε τη φωνή σου με χιλιάδες άλλους που μάχονται για κοινωνική δικαιοσύνη.",
      startNow: "✊ Ξεκινώ τώρα",
      explore: "🔍 Εξερευνώ Οργανώσεις",
      platformSection: "Πλατφόρμα",
      organizations: "Οργανώσεις",
      challenges: "Προκλήσεις",
      dashboard: "Ταμπλό",
      communitySection: "Κοινότητα", 
      aboutUs: "Ποιοι Είμαστε",
      manifesto: "Μανιφέστο",
      contact: "Επικοινωνία",
      legalSection: "Νομικά",
      privacy: "Απόρρητο",
      terms: "Όροι",
      transparency: "Διαφάνεια",
      footerCopyright: "Δημιουργημένη με αλληλεγγύη στα Εξάρχεια, Αθήνα. ✊",
      footerTagline: "Για κάθε άνθρωπο που αγωνίζεται, για κάθε όνειρο ελευθερίας."
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SolidarityIcon type="building" size="lg" color="red" />
              <h1 className="text-2xl font-bold text-red-700">Collectiva</h1>
              <span className="text-sm text-gray-600 hidden md:block">{t.tagline}</span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
                title={language === 'en' ? 'Switch to Greek' : 'Switch to English'}
              >
                <span className="text-sm font-medium text-gray-600">
                  {language === 'en' ? '🇬🇧 EN' : '🇬🇷 ΕΛ'}
                </span>
              </button>
              <Link href="/sign-in">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  {t.signIn}
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  {t.participate}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-full p-6 shadow-2xl">
              <SolidarityIcon type="fist" size="2xl" color="white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.heroTitle}
            <span className="text-red-600 block mt-2">{t.heroSubtitle}</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.heroDescription}
          </p>
          <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8 max-w-3xl mx-auto text-left">
            <p className="text-red-800 italic">
              "{t.heroQuote}"
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/sign-up">
              <Button size="lg" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold">
                {t.joinVoice}
              </Button>
            </Link>
            <Link href="/organizations">
              <Button variant="outline" size="lg" className="px-8 py-4 border-red-600 text-red-600 hover:bg-red-50">
                {t.findOrgs}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">{t.valuesTitle}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <SolidarityIcon type="hands" size="xl" color="white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{t.solidarity}</h4>
              <p className="text-red-100">
                {t.solidarityDesc}
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <CauseIcon type="social-justice" size="lg" className="bg-white/20" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{t.socialJustice}</h4>
              <p className="text-red-100">
                {t.socialJusticeDesc}
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <CauseIcon type="collective-action" size="lg" className="bg-white/20" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{t.collectiveAction}</h4>
              <p className="text-red-100">
                {t.collectiveActionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">{t.howItWorksTitle}</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.howItWorksSubtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CauseIcon type="solidarity" size="md" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">{t.chooseStruggles}</h4>
              <p className="text-gray-600 leading-relaxed">
                {t.chooseStrugglesDesc}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <SolidarityIcon type="heart" size="xl" color="orange" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">{t.continuousSupport}</h4>
              <p className="text-gray-600 leading-relaxed">
                {t.continuousSupportDesc}
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <SolidarityIcon type="shield" size="xl" color="gray" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">{t.seeChange}</h4>
              <p className="text-gray-600 leading-relaxed">
                {t.seeChangeDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exarchia Connection */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-full p-4 shadow-xl">
              <SolidarityIcon type="building" size="xl" color="white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-6">{t.exarchiaTitle}</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.exarchiaDesc}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto border border-white/20">
            <p className="text-white italic text-lg">
              "{t.exarchiaQuote}"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4 text-gray-900">{t.ctaTitle}</h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <div className="space-x-4">
            <Link href="/sign-up">
              <Button size="lg" className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold">
                {t.startNow}
              </Button>
            </Link>
            <Link href="/organizations">
              <Button variant="outline" size="lg" className="px-10 py-4 border-red-600 text-red-600 hover:bg-red-50 text-lg">
                {t.explore}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <SolidarityIcon type="building" size="md" color="red" />
                <h5 className="font-bold text-lg">Collectiva</h5>
              </div>
              <p className="text-gray-400">
                {language === 'en' ? 'Collective action and solidarity tool from Exarchia' : 'Εργαλείο συλλογικής δράσης και αλληλεγγύης από τα Εξάρχεια'}
              </p>
              <div className="mt-4 text-sm text-gray-500 flex items-center space-x-1">
                <SolidarityIcon type="home" size="sm" color="gray" />
                <span>{language === 'en' ? 'Exarchia, Athens' : 'Εξάρχεια, Αθήνα'}</span>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">{t.platformSection}</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/organizations" className="hover:text-white transition-colors">{t.organizations}</Link></li>
                <li><Link href="/challenges" className="hover:text-white transition-colors">{t.challenges}</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">{t.dashboard}</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">{t.communitySection}</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">{t.aboutUs}</Link></li>
                <li><Link href="/manifesto" className="hover:text-white transition-colors">{t.manifesto}</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">{t.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">{t.legalSection}</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">{t.privacy}</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">{t.terms}</Link></li>
                <li><Link href="/transparency" className="hover:text-white transition-colors">{t.transparency}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Collectiva. {t.footerCopyright}</p>
            <p className="mt-2 text-sm">{t.footerTagline}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
