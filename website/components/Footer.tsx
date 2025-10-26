export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">BAAO 実戦AI道場</h3>
          <p className="text-gray-400">
            BAAO Dojo for Practical AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">プログラム</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  BASIC｜稽古場
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ACTIVE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  PRIME｜師範会
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  RECIPES｜型録
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">詳細情報</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  BAAOとは
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FieldWorks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  導入事例
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">サポート</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  協業・取材
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  相談予約
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">リンク</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://www.baao.or.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  BAAO公式サイト
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © 2025 一般社団法人ビジネスAI推進機構 (BAAO). All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
