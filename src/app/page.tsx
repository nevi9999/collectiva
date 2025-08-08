import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🏛️</span>
              <h1 className="text-2xl font-bold text-red-700">Collectiva</h1>
              <span className="text-sm text-gray-600 hidden md:block">από την Εξάρχεια</span>
            </div>
            <div className="space-x-4">
              <Link href="/sign-in">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Σύνδεση
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Συμμετοχή
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
            <span className="text-6xl">✊</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Η Αλληλεγγύη είναι η
            <span className="text-red-600 block mt-2">Όπλο μας</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Από την καρδιά της Εξάρχειας, δημιουργούμε ένα δίκτυο αλληλεγγύης που στηρίζει 
            τις ΜΚΟ, τα εθελοντικά σωματεία και τις κοινωνικές οργανώσεις που αγωνίζονται 
            για δικαιοσύνη, ισότητα και κοινωνική απελευθέρωση.
          </p>
          <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8 max-w-3xl mx-auto text-left">
            <p className="text-red-800 italic">
              "Μόνο η συλλογική δράση μπορεί να σπάσει τις αλυσίδες της καταπίεσης. 
              Κάθε ευρώ που δίνεις είναι μια πέτρα στο οικοδόμημα της κοινωνικής αλλαγής."
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/sign-up">
              <Button size="lg" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold">
                🚩 Ενώνω τη Φωνή μου
              </Button>
            </Link>
            <Link href="/organizations">
              <Button variant="outline" size="lg" className="px-8 py-4 border-red-600 text-red-600 hover:bg-red-50">
                🏢 Βρες Οργανώσεις
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Οι Αξίες μας</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-3">Αλληλεγγύη</h4>
              <p className="text-red-100">
                Στηρίζουμε τους αδύναμους, προστατεύουμε τους πρόσφυγες, 
                και δίνουμε φωνή σε όσους δεν έχουν.
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">⚖️</div>
              <h4 className="text-xl font-semibold mb-3">Κοινωνική Δικαιοσύνη</h4>
              <p className="text-red-100">
                Αγωνιζόμαστε για ένα κόσμο όπου η ισότητα και η δικαιοσύνη 
                δεν είναι προνόμια αλλά δικαιώματα.
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="text-xl font-semibold mb-3">Συλλογική Δράση</h4>
              <p className="text-red-100">
                Μαζί είμαστε πιο δυνατοί. Κάθε συνεισφορά ενώνεται με χιλιάδες άλλες 
                για να δημιουργήσει πραγματική αλλαγή.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">Πώς Λειτουργεί η Αλληλεγγύη</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Τρεις απλά βήματα για να γίνεις μέρος του κινήματος
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Διάλεξε τους Αγώνες σου</h4>
              <p className="text-gray-600 leading-relaxed">
                Επέλεξε τις οργανώσεις που παλεύουν για τα ιδεανικά σου. 
                Δημιούργησε το προσωπικό σου χαρτοφυλάκιο αλληλεγγύης.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💪</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Συνεχής Στήριξη</h4>
              <p className="text-gray-600 leading-relaxed">
                Ρύθμισε μηνιαίες συνεισφορές που στηρίζουν αυτόματα τους αγώνες που έχεις επιλέξει. 
                Η σταθερότητα δίνει δύναμη.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📈</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Βλέπε την Αλλαγή</h4>
              <p className="text-gray-600 leading-relaxed">
                Παρακολούθησε πώς η συνεισφορά σου μετατρέπεται σε πραγματικά αποτελέσματα. 
                Η αλλαγή γίνεται ορατή.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exarchia Connection */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <span className="text-5xl">🏛️</span>
          </div>
          <h3 className="text-3xl font-bold mb-6">Από την Εξάρχεια για τον Κόσμο</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Γεννημένη στη γειτονιά που έζησε την εξέγερση του Πολυτεχνείου, που φιλοξενεί πρόσφυγες, 
            που αντιστέκεται στην καταπίεση. Η Collectiva φέρνει το πνεύμα της Εξάρχειας 
            στην ψηφιακή αλληλεγγύη.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto border border-white/20">
            <p className="text-white italic text-lg">
              "Εδώ που οι τοίχοι μιλούν για ελευθερία, όπου κάθε γκράφιτι είναι ένα μανιφέστο, 
              δημιουργούμε την πλατφόρμα που θα φέρει την αλληλεγγύη παντού."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4 text-gray-900">Έτοιμος να Αλλάξεις τον Κόσμο;</h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ένωσε τη φωνή σου με χιλιάδες άλλους που μάχονται για κοινωνική δικαιοσύνη.
          </p>
          <div className="space-x-4">
            <Link href="/sign-up">
              <Button size="lg" className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold">
                ✊ Ξεκινώ τώρα
              </Button>
            </Link>
            <Link href="/organizations">
              <Button variant="outline" size="lg" className="px-10 py-4 border-red-600 text-red-600 hover:bg-red-50 text-lg">
                🔍 Εξερευνώ Οργανώσεις
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
                <span className="text-xl">🏛️</span>
                <h5 className="font-bold text-lg">Collectiva</h5>
              </div>
              <p className="text-gray-400">
                Εργαλείο συλλογικής δράσης και αλληλεγγύης από την Εξάρχεια
              </p>
              <div className="mt-4 text-sm text-gray-500">
                📍 Εξάρχεια, Αθήνα
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Πλατφόρμα</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/organizations" className="hover:text-white transition-colors">Οργανώσεις</Link></li>
                <li><Link href="/challenges" className="hover:text-white transition-colors">Προκλήσεις</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Ταμπλό</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Κοινότητα</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Ποιοι Είμαστε</Link></li>
                <li><Link href="/manifesto" className="hover:text-white transition-colors">Μανιφέστο</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Επικοινωνία</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Νομικά</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Απόρρητο</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Όροι</Link></li>
                <li><Link href="/transparency" className="hover:text-white transition-colors">Διαφάνεια</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Collectiva. Δημιουργημένη με αλληλεγγύη στην Εξάρχεια, Αθήνα. ✊</p>
            <p className="mt-2 text-sm">Για κάθε άνθρωπο που αγωνίζεται, για κάθε όνειρο ελευθερίας.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
