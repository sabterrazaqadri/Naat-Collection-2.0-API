import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json([
    {
        id: 1,
        name: "تیری شان عم نوالہ اللہ جل جلالہ",
        lyrics: ` تیری شان عم نوالہ اللہ جل جلالہ
  
  تیرے پاک نام پہ اے خدا میرا دل فدا میری جاں فدا
  میری روح کی یہی غذا تیرا نام لب پہ رہے سدا
  ہوتیری رضا میری آرزو اللہ جل جلالہ اللہ جل جلالہ
  __________
  
   تجھے بے نیازی کا واسطہ ہو قبول میری یہ  التجاء
  کہ برائے احمد مجتبیٰ ہو معاف میری ہراک خطا
  سر حشر رہ جائے آبرو اللہ جل جلالہ اللہ جل جلالہ
  _________
  
  جو حساب ر وز حساب ہو نہ سوال ہو نہ جواب ہو  میرے دائیں ہاتھ کتاب ہو
  اور لب پہ نعت جناب ہو
  میں رہوں حضور کے روبرو اللہ جل جلالہ اللہ جل جلالہ
  __________
  
  میں گناہ گار ہوں اے خدا کوئی نیک کام نہ کرسکا
  نہیں ہو سکا تیرا حق ادا  تیرا فیض و فضل ہے بے بہا
  ہو تیری رضا میری آرزو اللہ جل جلالہ اللہ جل جلالہ
  __________
  
  یہ دعا کرو میرے دوستو کہ عطا ہو ذوق یہ نجم کو
  کبھی حمد ہو کبھی نعت ہو یہ دعا کرو  ہاں دعا کرو
  میری چشم تر رہے باوضو اللہ جل جلالہ اللہ جل جلالہ
  __________`,
      },
  
      {
        id: 2,
        name: "راحت افزا عجب ہے ذکر ترا",
        lyrics: `راحت افزا عجب ہے ذکر ترا
  مغفرت کا سبب ہے ذکر ترا
  __________
  
  زینت ِ نطق  تیرا اسم عظیم
  وجہ تحریک لب ہے ذکر  ترا
  __________
  
  وقت کے ہاتھ میں تری تسبیح
  گردشِ روز و شب ہے ذکر ترا
  __________
  
  بندگی،  حلم،  آگہی،  ایثارہے
  دیکھا جائے تو سب ہے ذکر ترا
  __________
  
  بے بسی  کی سیاہ راتوں میں
  روشنی کا سبب ذکر ترا
  __________
  
  جس جا احصا کرے زبانِ بشر
  اتنا محدود کب ہے ذکر ترا
  __________
  
  تیرے  ارشاد سے ہوا معلوم
  ذکر شاہ عرب ہے ذکر ترا
  __________
  
  کس کو نسبت ہے تیرے پیاروں سے
  اس زمیں کا ادب ہے ذکر ترا
  __________
  
  فکرِ شہزادؔ کے لئے لاریب
      باعثِ تاب و تب ہے ذکر ترا
  __________`,
      },
      {
        id: 3,
        name: "حاضر ہیں حاضر ہیں حاضر ہیں ہم",
        lyrics: `حاضر ہیں حاضر ہیں حاضر ہیں ہم
  لَبَّیْکَ اَللّٰھُمَّ لَبَّیْکَ لَبَّیْکَ لَا  شَرِیْکَ
  لَکَ لَبَّیْکَ اِنَّ الْحَمْدَ وَ النَّعْمَۃَ لَکَ
  وَ الْمُلْکَ لَا شَرِیْکَ لَکَ
  __________
  
  لائق حمد و ثنا  تیرے سوا کوئی نہیں
  سننے والا عاصیوں کی التجا کوئی نہیں
  ڈوبتوں کو جو بنا دے ناخدا کوئی نہیں 
  جھولیاں بھر دے جوسن کے مدعا 
  کوئی نہیں 
  آسرا تیرے سوا تیرے سوا کوئی 
  نہیں 
  تر ہے دامن بھی ہمارے اور آنکھیں 
  بھی ہیں نم 
  حاضر ہیں حاضر ہیں حاضر ہیں ہم 
  __________
  
  یہ شرف کہ آدمی اللہ کے گھر جائے گا
  یہ شرف کہ پاک دامن کا وہ رتبہ پائے گا
  یہ شرف کہ داغ ِ دامن بھی ہر اک دھل جائے گا
  یہ شرف کہ ہر خطا رب در گزر فرمائے گا
  یہ شرف کہ روضۂ شاہِ امم پر جائے گا
  اس شرف پہ جان بھی قربان کر دے تو ہے کم
  حاضر ہیں حاضر ہیں حاضر ہیں ہم
  __________
  
  یہ سفر حج کا سفر  بگڑے بناتا ہے نصیب
  یہ سفر مخلوق کو خالق سے کرتا 
  ہے قریب 
  یہ سفر یعنی مریضوں سے ملاقات ِ 
  طبیب
  ہو مقدر سے اگر عرفات کا میدان نصیب
  یہ دعا مانگو کھڑے ہو کر وہاں پر اے ادیبؔ
  ہو غلام ِ مصطفیٰ میں نام اپنا بھی رقم
  حاضر ہیں حاضر ہیں حاضر ہیں ہم
  __________`,
      },
      {
        id: 4,
        name: "يا رب العلمين ﷲ ہو ﷲ",
        lyrics: `يا رب العلمين ﷲﷲ
  صل على طه الامين ﷲﷲ
  في كل وقت و حين ﷲﷲ
  __________
  
  إملأ قلبي باليقين ﷲﷲ
  ثبتني على ه‍ذا الدين ﷲﷲ
  واغفر لي و المسلمين ﷲﷲ
  __________
  
  حسبي ربي جل ﷲﷲ
  ما في قلبي غير ﷲﷲ 
  على اله‍ادي صلى ﷲﷲ
  لااله الاالله ﷲﷲ
  __________`,
      },
      {
        id: 5,
        name: "وہ تنہا کون ہے اﷲ ہو ﷲ",
        lyrics: `وہ تنہا کون ہے ﷲ ہو ﷲ
  بادشاہ وہ کون ہے ﷲ ہو ﷲ
  مہربان وہ کون ہے ﷲ ہو ﷲ
  __________
  
  کیا اونچی شان ہے ﷲ ہو ﷲ
  سب دلوں کی جان ہے ﷲ ہو ﷲ
  اس کے سب نشان ہے ﷲ ہو ﷲ
  __________`,
      },
      {
        id: 6,
        name: "اللہ کے گھر میں ہوں",
        lyrics: `اللہ نے بلایا ہے اللہ کے گھر میں ہوں
  کعبے کا نظارہ ہے اللہ کے گھر میں ہوں
  __________
  
  دربار یہ کیسا ہے پیشانی سے پہلے 
  دل
  سجدے میں جھکایا اللہ کے گھر 
  میں ہوں
  __________
  
  وہ رکن یمانی ہو یا رکن عراقی ہو
  ہر کونےکو چوما ہے اللہ کے گھر میں ہوں
  __________
  
  مہمان خدا کے ہیں اب فکر نہیں 
  کوئی
  اللہ نے کھلانا ہے اللہ کے گھر میں 
  ہوں
  __________
  
  مرکز ہے ہدایت کا یہ کعبہ مبارک گھر
  دنیا میں جو پہلا ہے اللہ کے گھر میں ہوں
  __________
  
  یہ نقش براہیمی دیکھا تو مچل اٹھے 
  مؤمن کا مصلہ ہے اللہ کے گھر میں 
  ہوں
  __________
  
  یہ وقت ہے عزت کا میزاب ہے رحمت کا
  سرپہ یہی سایہ ہے اللہ کے گھر میں ہوں
  __________
  
  جس سمت نظر اٹھی اک نور نظر آیا
  پُر نور نظارہ ہے اللہ کے گھر میں ہوں
  __________
  
   اللہ کرم کرنا  ہر سال بلا لینا
  ہر دل کی تمنا ہے اللہ کے گھر میں 
  ہوں
  __________
  
  یہ پاک حرم جس مین سارے ہی نبی آئے
  کیا خوب نصیبا ہے اللہ کے گھر میں ہوں
  __________
  
  سجدے میں اجاگرؔ ہے اور سامنے 
  کعبہ ہے
  مولا نے نوازا ہے اللہ کے گھر میں 
  ہوں
  __________`,
      },
      {
        id: 7,
        name: "کعبہ دکھا دے مولا",
        lyrics: `ہر آنکھ چاہتی ہے کعبہ دکھا دے مولا
  حسرت پکارتی ہے کعبہ دکھا دے مولا
  __________
  
  کوہ ِصفا سے دوڑوں مروہ کی چوٹیوں تک
  خواہش مچل رہی ہے کعبہ دکھا دے مولا
  __________
  
  احرام پھر پہن کر طوفِ حرم کروں میں
  میری دعا یہی ہے کعبہ دکھا دے مولا
  __________
  
  مینار اونچے اونچے دکھلا دے  تو حرم کے
  پستی میں زندگی ہے کعبہ دکھا دے مولا
  __________
  
  یادِ حرم میں آنسو بہنیں کو رو رہے ہیں
  اک آگ سی لگی ہے کعبہ دکھا دے مولا
  __________
  
  حالات کا ہوں مارا دامن میرا ہے خالی
  اسباب کی کمی ہے کعبہ دکھا دے مولا
  __________
  
  یہ ملتزم سے جا کر لپٹتا رہے اجاگرؔ
  یہ آرزو بڑی ہے کعبہ دکھا دے مولا
  `,
      },
      {
        id: 8,
        name: "مرے مولا میں حاضر ہوں",
        lyrics: `چلا آیا ہوں تیرے گھر مرے مولا میں حاضرہوں
  صدا لبیک کی لب پر مرے مولا میں حاضرہوں
  __________
  
  مرے آنسو ہیں فریادی مری آہیں سسکتی ہیں
  مجھے بھی بخش دے داور مرے مولا میں حاضرہوں
  __________
  
  حطیمِ پاک کانہ خدا کا ایک حصہ ہے
  میں آیا ہوں کعبے کے اندر مرے مولا میں حاضرہوں
  __________
  
  غلافِ کعبہ ہاتھوں میں پکڑ کر یہ دعا مانگی
  کبھی چھوٹے نہ تیرا در مرے مولا میں حاضرہوں
  __________
  
  نکل آئے کوئی  صورت میری بخشش کی یا اللہ
  حرم میں ہو کرم مجھ پر مرے مولا میں حاضرہوں
  __________
  
  مطافِ کعبہ میں ہوں اور چھما چھم بارشیں ہیں
  دکھا ہر سال یہ منظر مرے مولا میں حاضرہوں
  __________
  
  کرم کی بارشوں میں سر جھکانا مانگنا رب سے
  رہے گا یا د یہ منظر مرے مولا میں حاضرہوں
  __________
  
  گناہوںمیں بسر کی زندگی ہائے پشماں ہوں
  جھکائے سر بچشم تر مرے مولا میں حاضرہوں
  __________
  
  نظر پہلی پڑی کعبے پہ اپنے رب سے یہ مانگا
  مری موت ہو ایماں پر مرے مولا میں حاضرہوں
  __________
  
  اجاگرؔ نے  تجھے پایا تو اس نے پا لیا سب کچھ
  رضا تیری مرا زیور مرے مولا میں حاضرہوں
  `,
      },
  ]);
});

export default router;
