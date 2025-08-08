"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SolidarityIcon } from "@/components/ui/solidarity-icon";
import { CauseIcon } from "@/components/ui/cause-icon";

export default function OrganizationsPage() {
  const [language, setLanguage] = useState<'en' | 'gr'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gr' : 'en');
  };

  // Translation content
  const content = {
    en: {
      title: "Solidarity Organizations",
      subtitle: "Support the causes that matter most to you",
      allCauses: "All Causes",
      featuredOrgs: "Featured Organizations",
      supportNow: "Support Now",
      learnMore: "Learn More",
      
      causes: {
        immigration: {
          title: "Immigration & Refugee Support",
          description: "Organizations helping refugees and immigrants find safety, shelter, and new opportunities.",
          count: "23 organizations"
        },
        environment: {
          title: "Environmental Protection",
          description: "Fighting climate change and protecting our planet for future generations.",
          count: "18 organizations"
        },
        womensRights: {
          title: "Women's Rights",
          description: "Advancing gender equality and fighting for women's rights worldwide.",
          count: "31 organizations"
        },
        floodRelief: {
          title: "Flood & Disaster Relief",
          description: "Providing immediate aid and long-term recovery support for flood victims.",
          count: "12 organizations"
        },
        stateViolence: {
          title: "Against State Violence",
          description: "Organizations fighting police brutality and state oppression.",
          count: "15 organizations"
        },
        poverty: {
          title: "Poverty & Housing",
          description: "Supporting the homeless and fighting against economic inequality.",
          count: "27 organizations"
        }
      }
    },
    gr: {
      title: "Οργανώσεις Αλληλεγγύης",
      subtitle: "Στήριξε τους αγώνες που σε αγγίζουν περισσότερο",
      allCauses: "Όλοι οι Αγώνες",
      featuredOrgs: "Προτεινόμενες Οργανώσεις",
      supportNow: "Στήριξη Τώρα",
      learnMore: "Μάθε Περισσότερα",
      
      causes: {
        immigration: {
          title: "Μετανάστευση & Στήριξη Προσφύγων",
          description: "Οργανώσεις που βοηθούν πρόσφυγες και μετανάστες να βρουν ασφάλεια και νέες ευκαιρίες.",
          count: "23 οργανώσεις"
        },
        environment: {
          title: "Περιβαλλοντική Προστασία",
          description: "Μάχη κατά της κλιματικής αλλαγής και προστασία του πλανήτη μας.",
          count: "18 οργανώσεις"
        },
        womensRights: {
          title: "Δικαιώματα Γυναικών",
          description: "Προώθηση της ισότητας των φύλων και αγώνας για τα δικαιώματα των γυναικών.",
          count: "31 οργανώσεις"
        },
        floodRelief: {
          title: "Αρωγή σε Πλημμυροπαθείς",
          description: "Άμεση βοήθεια και μακροπρόθεσμη υποστήριξη για θύματα πλημμυρών.",
          count: "12 οργανώσεις"
        },
        stateViolence: {
          title: "Κατά της Κρατικής Βίας",
          description: "Οργανώσεις που πολεμούν την αστυνομική βία και την κρατική καταπίεση.",
          count: "15 οργανώσεις"
        },
        poverty: {
          title: "Φτώχεια & Στέγαση",
          description: "Υποστήριξη των αστέγων και αγώνας κατά της οικονομικής ανισότητας.",
          count: "27 οργανώσεις"
        }
      }
    }
  };

  const t = content[language];

  const causesList = [
    { key: 'immigration', icon: 'immigration' as const, color: 'from-blue-500 to-blue-600' },
    { key: 'environment', icon: 'environment' as const, color: 'from-green-500 to-green-600' },
    { key: 'womensRights', icon: 'womens-rights' as const, color: 'from-purple-500 to-pink-500' },
    { key: 'floodRelief', icon: 'flood-relief' as const, color: 'from-cyan-500 to-blue-500' },
    { key: 'stateViolence', icon: 'state-violence' as const, color: 'from-orange-500 to-red-500' },
    { key: 'poverty', icon: 'poverty' as const, color: 'from-amber-600 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-red-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <SolidarityIcon type="building" size="lg" color="red" />
                <h1 className="text-2xl font-bold text-red-700">Collectiva</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm font-medium text-gray-600">
                  {language === 'en' ? '🇬🇧 EN' : '🇬🇷 ΕΛ'}
                </span>
              </button>
              <Link href="/sign-in">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  {language === 'en' ? 'Sign In' : 'Σύνδεση'}
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  {language === 'en' ? 'Join Us' : 'Συμμετοχή'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 rounded-full p-6">
              <SolidarityIcon type="people" size="2xl" color="white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.allCauses}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causesList.map((cause) => {
              const causeData = t.causes[cause.key as keyof typeof t.causes];
              return (
                <div key={cause.key} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className={`bg-gradient-to-r ${cause.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <CauseIcon type={cause.icon} size="lg" className="bg-white/20" />
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {causeData.count}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{causeData.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {causeData.description}
                    </p>
                    
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                        {t.supportNow}
                      </Button>
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                        {t.learnMore}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Organizations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.featuredOrgs}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample featured organizations */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CauseIcon type="immigration" size="md" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {language === 'en' ? 'Refugee Welcome Center' : 'Κέντρο Υποδοχής Προσφύγων'}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {language === 'en' ? 'Immigration Support' : 'Υποστήριξη Μεταναστών'}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'en' 
                  ? 'Providing shelter, legal aid, and integration support for refugees in Athens.'
                  : 'Παροχή στέγης, νομικής βοήθειας και υποστήριξης ένταξης για πρόσφυγες στην Αθήνα.'
                }
              </p>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {t.supportNow}
              </Button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CauseIcon type="environment" size="md" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {language === 'en' ? 'Green Athens Initiative' : 'Πράσινη Αθήνα'}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {language === 'en' ? 'Environmental Protection' : 'Περιβαλλοντική Προστασία'}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'en' 
                  ? 'Fighting air pollution and promoting sustainable urban development.'
                  : 'Καταπολέμηση της ατμοσφαιρικής ρύπανσης και προώθηση αειφόρου ανάπτυξης.'
                }
              </p>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                {t.supportNow}
              </Button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CauseIcon type="womens-rights" size="md" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {language === 'en' ? 'Women\'s Safety Network' : 'Δίκτυο Ασφάλειας Γυναικών'}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {language === 'en' ? 'Women\'s Rights' : 'Δικαιώματα Γυναικών'}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'en' 
                  ? 'Supporting victims of domestic violence and promoting gender equality.'
                  : 'Υποστήριξη θυμάτων ενδοοικογενειακής βίας και προώθηση ισότητας φύλων.'
                }
              </p>
              <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                {t.supportNow}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <SolidarityIcon type="building" size="md" color="red" />
            <h5 className="font-bold text-lg">Collectiva</h5>
          </div>
          <p className="text-gray-400 mb-4">
            {language === 'en' 
              ? 'Collective action and solidarity tool from Exarchia'
              : 'Εργαλείο συλλογικής δράσης και αλληλεγγύης από τα Εξάρχεια'
            }
          </p>
          <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
            <SolidarityIcon type="home" size="sm" color="gray" />
            <span>{language === 'en' ? 'Exarchia, Athens' : 'Εξάρχεια, Αθήνα'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
