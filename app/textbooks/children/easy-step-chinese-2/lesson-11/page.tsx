"use client";

import { Card } from "@/components/ui/card";

export default function Lesson11() {
  const foodItems = [
    { chinese: "热狗", pinyin: "règǒu", hungarian: "hotdog" },
    { chinese: "汉堡包", pinyin: "hànbǎobāo", hungarian: "hamburger" },
    { chinese: "比萨饼", pinyin: "bǐsàbǐng", hungarian: "pizza" },
    { chinese: "薯条", pinyin: "shǔtiáo", hungarian: "sült krumpli" },
    { chinese: "苹果派", pinyin: "píngguǒpài", hungarian: "almás pite" },
  ];

  const drinkItems = [
    { chinese: "咖啡", pinyin: "kāfēi", hungarian: "kávé" },
    { chinese: "可乐", pinyin: "kělè", hungarian: "kóla" },
    { chinese: "汽水", pinyin: "qìshuǐ", hungarian: "szénsavas üdítő" },
    { chinese: "中国茶", pinyin: "Zhōngguó chá", hungarian: "kínai tea" },
    { chinese: "英国茶", pinyin: "Yīngguó chá", hungarian: "angol tea" },
  ];

  const examples = [
    {
      chinese: "你喜欢吃中餐还是西餐？",
      pinyin: "Nǐ xǐhuān chī zhōngcān háishì xīcān?",
      hungarian: "Szereted a kínai vagy a nyugati ételeket?",
    },
    {
      chinese: "这两种我都喜欢。",
      pinyin: "Zhè liǎng zhǒng wǒ dōu xǐhuān.",
      hungarian: "Mindkettőt szeretem.",
    },
    {
      chinese: "你喜欢喝什么饮料？",
      pinyin: "Nǐ xǐhuān hē shénme yǐnliào?",
      hungarian: "Milyen italt szeretsz inni?",
    },
  ];

  // Add new constants for part 2
  const vocabularyItems = [
    { chinese: "全", pinyin: "quán", hungarian: "egész, teljes" },
    { chinese: "全家", pinyin: "quán jiā", hungarian: "teljes család" },
    { chinese: "早餐", pinyin: "zǎocān", hungarian: "reggeli" },
    { chinese: "一般", pinyin: "yì bān", hungarian: "általában" },
    { chinese: "粥", pinyin: "zhōu", hungarian: "kása, rizskása" },
    { chinese: "或者", pinyin: "huòzhě", hungarian: "vagy" },
    { chinese: "面条", pinyin: "miàn tiáo", hungarian: "tészta" },
    { chinese: "午饭", pinyin: "wǔfàn", hungarian: "ebéd" },
    { chinese: "炒", pinyin: "chǎo", hungarian: "sütni, pirítani" },
    { chinese: "炒面", pinyin: "chǎo miàn", hungarian: "sült tészta" },
    { chinese: "炒菜", pinyin: "chǎo cài", hungarian: "sült zöldség" },
    { chinese: "包子", pinyin: "bāo zi", hungarian: "gőzölt zsemle, bun" },
    { chinese: "晚饭", pinyin: "wǎn fàn", hungarian: "vacsora" },
    { chinese: "米饭", pinyin: "mǐ fàn", hungarian: "rizs" },
    { chinese: "饭店", pinyin: "fàn diàn", hungarian: "étterem" },
    { chinese: "吃饭", pinyin: "chī fàn", hungarian: "étkezni" },
    { chinese: "会", pinyin: "huì", hungarian: "képes, valószínű" },
    { chinese: "春卷", pinyin: "chūn juǎn", hungarian: "tavaszi tekercs" },
    {
      chinese: "馄饨",
      pinyin: "hún tun",
      hungarian: "wonton, hússal töltött levesgombóc",
    },
    { chinese: "饺子", pinyin: "jiǎo zi", hungarian: "gombóc, dumpling" },
    {
      chinese: "生煎包",
      pinyin: "shēng jiān bāo",
      hungarian: "sült hússal töltött zsemle",
    },
    { chinese: "豆浆", pinyin: "dòu jiāng", hungarian: "szója tej" },
  ];

  const newExamples = [
    {
      chinese: "我的全家人都喜欢吃中餐。",
      pinyin: "Wǒmen quánjiā rén dōu xǐhuān chī zhōngcān.",
      hungarian: "Az egész családom szeret enni kínai ételt.",
    },
    {
      chinese: "早餐我们一般吃粥或者面条。",
      pinyin: "Zǎocān wǒmen yì bān chī zhōu huòzhě miàntiáo.",
      hungarian: "Reggelire általában kását vagy tésztát eszünk.",
    },
    {
      chinese: "我们午饭吃炒面或者包子。",
      pinyin: "Wǒmen wǔfàn chī chǎo miàn huòzhě bāozi.",
      hungarian: "Ebédre sült tésztát vagy gőzölt bun-t eszünk.",
    },
    {
      chinese: "我们晚饭一般吃米饭、炒菜。",
      pinyin: "Wǒmen wǎn fàn yì bān chī mǐ fàn, chǎo cài.",
      hungarian: "Vacsorára általában rizst és sült zöldséget eszünk.",
    },
    {
      chinese: "我们家周末有时候去饭店吃饭。",
      pinyin: "Wǒmen jiā zhōumò yǒu shíhòu qù fàndiàn chīfàn.",
      hungarian: "A családunk néha hétvégén étterembe megy vacsorázni.",
    },
    {
      chinese: "下个周末我们会去一家饭店吃饭。",
      pinyin: "Xià gè zhōumò wǒmen huì qù yìjiā fàndiàn chīfàn.",
      hungarian: "A jövő hétvégén étterembe fogunk menni.",
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-4xl py-8">
      <Card className="p-8 bg-white mb-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
          11. Lecke - 1. Rész: Gyorsételek
        </h1>

        <div className="mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 text-left border">Kínai (汉字)</th>
                <th className="p-3 text-left border">Pinyin</th>
                <th className="p-3 text-left border">Magyar (匈牙利语)</th>
              </tr>
            </thead>
            <tbody>
              {foodItems.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">{item.chinese}</td>
                  <td className="p-3 border">{item.pinyin}</td>
                  <td className="p-3 border">{item.hungarian}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
          🥤 Italok (饮料 yǐnliào)
        </h2>

        <div className="mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 text-left border">Kínai (汉字)</th>
                <th className="p-3 text-left border">Pinyin</th>
                <th className="p-3 text-left border">Magyar (匈牙利语)</th>
              </tr>
            </thead>
            <tbody>
              {drinkItems.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">{item.chinese}</td>
                  <td className="p-3 border">{item.pinyin}</td>
                  <td className="p-3 border">{item.hungarian}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
          💭 Példamondatok
        </h2>

        <div className="space-y-6">
          {examples.map((example, index) => (
            <div key={index} className="p-4 bg-blue-50 rounded-lg">
              <p className="text-lg mb-1 font-medium">{example.chinese}</p>
              <p className="text-gray-600 italic mb-1">({example.pinyin})</p>
              <p className="text-gray-700">– {example.hungarian}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 bg-white">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
          11. Lecke - 2. Rész: Napi Étkezések
        </h1>

        <div className="mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 text-left border">Kínai (汉字)</th>
                <th className="p-3 text-left border">Pinyin</th>
                <th className="p-3 text-left border">Magyar (匈牙利语)</th>
              </tr>
            </thead>
            <tbody>
              {vocabularyItems.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">{item.chinese}</td>
                  <td className="p-3 border">{item.pinyin}</td>
                  <td className="p-3 border">{item.hungarian}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
          💭 Példamondatok
        </h2>

        <div className="space-y-6">
          {newExamples.map((example, index) => (
            <div key={index} className="p-4 bg-blue-50 rounded-lg">
              <p className="text-lg mb-1 font-medium">{example.chinese}</p>
              <p className="text-gray-600 italic mb-1">({example.pinyin})</p>
              <p className="text-gray-700">– {example.hungarian}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
