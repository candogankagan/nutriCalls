const translations = {
  login: {
    welcome: 'WelcomeToBaseRNAPP',
    message: 'Aşağıdaki bilgileri girerek uygulamaya giriş yapabilirsiniz.',
    screen2Title: 'Sigorta çözümlerimiz ile\ngeleceğiniz güvende',
    screen2Message: 'Araç, sağlık, seyahat ve birçok farklı sigorta çözümü sunuyoruz. Hayatınızın her anında yanınızdayız.',
    screen3Title: 'Geniş servis ağı ile\ngüvenilir hizmet sunuyoruz',
    screen3Message: 'Türkiye’nin dört bir yanında bulunan anlaşmalı servislerimizde aracınızın onarımı Sompo ile çok kolay!',
    letsUse: 'Kullanmaya Başla',
    skip: 'Atla',
    selectLanguage: 'Dil Seçimi',
    bottomSheetHeader: 'Telefon veya şifreniz yanlış',
    bottomSheetMessage: 'Lütfen kullanıcı bilgilerinizi kontrol ederek tekrar giriş yapın',
    languageTurkish: 'Türkçe',
    languageEnglish: 'English'
  },
  createPassword: {
    welcome: '{{name}},\nKobe’ye Hoş Geldiniz',
    message: 'Şifrenizi belirleyerek uygulamaya giriş yapabilirsiniz'
  },
  forgotPassword: {
    headerText: 'Şifremi Unuttum',
    message: 'Yeni şifrenizi oluşturmak için telefon numaranızı girerek işleme devam edebilirsiniz.',
    updatePassword: 'Şifre Belirleme',
    updateMessage: '6 rakamdan oluşan yeni şifrenizi aşağıdaki alana girerek işleminize devam edebilirsiniz.',
    buttonText: 'Şifremi Güncelle'
  },
  common: {
    rememberMe: 'Beni Hatırla',
    forgotPassword: 'Şifremi Unuttum',
    skip: 'Atla',
    login: 'Fill the blanks then go to Otp',
    apply: `Kobe'ye Başvur`,
    noAccount: 'Hesabınız yok mu?',
    continue: 'Devam Et',
    okey: 'Tamam',
    tryAgain: 'Tekrar Dene',
    otp: 'SMS Doğrulama'
  },
  receiptModal: {
    receiptNo: 'Dekont No'
  },
  register: {
    layoutHeaderText: "Kobe'ye Başvur",
    headerText: 'Kişisel Bilgiler',
    message: 'Aşağıda yer alan kişisel bilgilerinizi girerek işleme devam edebilirsiniz.',
    headerText2: 'Firma Bilgileri',
    message2: 'Aşağıda yer alan firma bilgilerinizi girerek işleme devam edebilirsiniz.',
    exitModalTitle: 'İşlem Sonlandırma',
    exitModalMessage: 'Başvuru sürecini sonlandırmak üzeresiniz. Onaylıyor musunuz?',
    exitModalPrimaryButton: 'Onayla',
    exitModalSecondaryButton: 'Vazgeç',
    monthlyPosTurnoverListTitle: 'Aylık POS Cironuz'
  },
  transactionSummary: {
    header: 'İşlem Özeti',
    text: 'Aşağıda yer alan bilgileri kontrol ederek başvuru işlemini onaylayabilirsiniz.'
  },
  inputHolders: {
    telephoneNumber: 'Cep Telefonu',
    password: 'Şifre',
    name: 'Ad',
    surname: 'Soyad',
    mailAddress: 'E-Posta Adresi',
    companyWebsite: 'Firma Web Sitesi',
    monthlyPosTurnover: 'Aylık POS Cironuz',
    companyCode: 'Kampanya Kodu (Opsiyonel)'
  },
  getPayment: {
    layoutHeaderText: 'Ödeme Al',
    enterAmount: 'Tutar Giriniz'
  }
} as const;

export default translations;
