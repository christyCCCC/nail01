let currentLanguage = 'zh';
        let testStep = 1;
        let testData = {};
        
        // Language switching
        function toggleLanguage() {
            currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
            const langSwitch = document.querySelector('.language-switch');
            
            if (currentLanguage === 'en') {
                langSwitch.classList.add('english');
                document.documentElement.lang = 'en';
            } else {
                langSwitch.classList.remove('english');
                document.documentElement.lang = 'zh-TW';
            }
            
            // Update all text elements
            const elements = document.querySelectorAll('[data-zh][data-en]');
            elements.forEach(element => {
                const text = element.getAttribute(`data-${currentLanguage}`);
                if (text) {
                    if (element.tagName === 'INPUT' && element.type === 'submit') {
                        element.value = text;
                    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = text;
                    } else {
                        element.textContent = text;
                    }
                }
            });
        }
        
        // AI Test Functions
        function startAITest() {
            testStep = 1;
            testData = {};
            document.getElementById('ai-test-modal').classList.remove('hidden');
            loadTestStep();
        }
        
        function closeAITest() {
            document.getElementById('ai-test-modal').classList.add('hidden');
        }
        
        function loadTestStep() {
            const content = document.getElementById('ai-test-content');
            
            switch(testStep) {
                case 1:
                    content.innerHTML = `
                        <div class="text-center mb-8">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">1</div>
                            <h4 class="text-2xl font-bold mb-2" data-zh="基本資料" data-en="Basic Information">${currentLanguage === 'zh' ? '基本資料' : 'Basic Information'}</h4>
                            <p class="text-gray-600" data-zh="讓我們先了解一下你的基本資訊" data-en="Let's start with your basic information">${currentLanguage === 'zh' ? '讓我們先了解一下你的基本資訊' : "Let's start with your basic information"}</p>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700 font-medium mb-2" data-zh="姓名" data-en="Name">${currentLanguage === 'zh' ? '姓名' : 'Name'}</label>
                                    <input type="text" id="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                </div>
                                <div>
                                    <label class="block text-gray-700 font-medium mb-2" data-zh="生日" data-en="Birthday">${currentLanguage === 'zh' ? '生日' : 'Birthday'}</label>
                                    <input type="date" id="birthday" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700 font-medium mb-2" data-zh="星座" data-en="Zodiac Sign">${currentLanguage === 'zh' ? '星座' : 'Zodiac Sign'}</label>
                                    <select id="zodiac" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                        <option value="">${currentLanguage === 'zh' ? '請選擇' : 'Please select'}</option>
                                        <option value="aries">${currentLanguage === 'zh' ? '牡羊座' : 'Aries'}</option>
                                        <option value="taurus">${currentLanguage === 'zh' ? '金牛座' : 'Taurus'}</option>
                                        <option value="gemini">${currentLanguage === 'zh' ? '雙子座' : 'Gemini'}</option>
                                        <option value="cancer">${currentLanguage === 'zh' ? '巨蟹座' : 'Cancer'}</option>
                                        <option value="leo">${currentLanguage === 'zh' ? '獅子座' : 'Leo'}</option>
                                        <option value="virgo">${currentLanguage === 'zh' ? '處女座' : 'Virgo'}</option>
                                        <option value="libra">${currentLanguage === 'zh' ? '天秤座' : 'Libra'}</option>
                                        <option value="scorpio">${currentLanguage === 'zh' ? '天蠍座' : 'Scorpio'}</option>
                                        <option value="sagittarius">${currentLanguage === 'zh' ? '射手座' : 'Sagittarius'}</option>
                                        <option value="capricorn">${currentLanguage === 'zh' ? '摩羯座' : 'Capricorn'}</option>
                                        <option value="aquarius">${currentLanguage === 'zh' ? '水瓶座' : 'Aquarius'}</option>
                                        <option value="pisces">${currentLanguage === 'zh' ? '雙魚座' : 'Pisces'}</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-gray-700 font-medium mb-2" data-zh="血型" data-en="Blood Type">${currentLanguage === 'zh' ? '血型' : 'Blood Type'}</label>
                                    <select id="bloodType" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                        <option value="">${currentLanguage === 'zh' ? '請選擇' : 'Please select'}</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="AB">AB</option>
                                        <option value="O">O</option>
                                    </select>
                                </div>
                            </div>
                            
                            <button onclick="nextStep()" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium" data-zh="下一步" data-en="Next Step">${currentLanguage === 'zh' ? '下一步' : 'Next Step'}</button>
                        </div>
                    `;
                    break;
                    
                case 2:
                    content.innerHTML = `
                        <div class="text-center mb-8">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">2</div>
                            <h4 class="text-2xl font-bold mb-2" data-zh="性格特質測驗" data-en="Personality Test">${currentLanguage === 'zh' ? '性格特質測驗' : 'Personality Test'}</h4>
                            <p class="text-gray-600" data-zh="選擇最符合你的描述" data-en="Choose the descriptions that best match you">${currentLanguage === 'zh' ? '選擇最符合你的描述' : 'Choose the descriptions that best match you'}</p>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h5 class="font-semibold mb-4" data-zh="你通常如何做決定？" data-en="How do you usually make decisions?">${currentLanguage === 'zh' ? '你通常如何做決定？' : 'How do you usually make decisions?'}</h5>
                                <div class="space-y-3">
                                    <label class="flex items-center">
                                        <input type="radio" name="decision" value="logical" class="mr-3">
                                        <span data-zh="理性分析，基於事實和數據" data-en="Logical analysis based on facts and data">${currentLanguage === 'zh' ? '理性分析，基於事實和數據' : 'Logical analysis based on facts and data'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="decision" value="intuitive" class="mr-3">
                                        <span data-zh="憑直覺和感覺" data-en="Based on intuition and feelings">${currentLanguage === 'zh' ? '憑直覺和感覺' : 'Based on intuition and feelings'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="decision" value="collaborative" class="mr-3">
                                        <span data-zh="與他人討論後決定" data-en="Decide after discussing with others">${currentLanguage === 'zh' ? '與他人討論後決定' : 'Decide after discussing with others'}</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h5 class="font-semibold mb-4" data-zh="你的理想工作環境是？" data-en="What's your ideal work environment?">${currentLanguage === 'zh' ? '你的理想工作環境是？' : "What's your ideal work environment?"}</h5>
                                <div class="space-y-3">
                                    <label class="flex items-center">
                                        <input type="radio" name="environment" value="quiet" class="mr-3">
                                        <span data-zh="安靜獨立的空間" data-en="Quiet independent space">${currentLanguage === 'zh' ? '安靜獨立的空間' : 'Quiet independent space'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="environment" value="collaborative" class="mr-3">
                                        <span data-zh="熱鬧的團隊合作" data-en="Lively team collaboration">${currentLanguage === 'zh' ? '熱鬧的團隊合作' : 'Lively team collaboration'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="environment" value="flexible" class="mr-3">
                                        <span data-zh="彈性自由的環境" data-en="Flexible and free environment">${currentLanguage === 'zh' ? '彈性自由的環境' : 'Flexible and free environment'}</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h5 class="font-semibold mb-4" data-zh="面對挑戰時，你會？" data-en="When facing challenges, you would?">${currentLanguage === 'zh' ? '面對挑戰時，你會？' : 'When facing challenges, you would?'}</h5>
                                <div class="space-y-3">
                                    <label class="flex items-center">
                                        <input type="radio" name="challenge" value="systematic" class="mr-3">
                                        <span data-zh="制定詳細計劃逐步解決" data-en="Create detailed plans and solve step by step">${currentLanguage === 'zh' ? '制定詳細計劃逐步解決' : 'Create detailed plans and solve step by step'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="challenge" value="creative" class="mr-3">
                                        <span data-zh="尋找創新的解決方案" data-en="Look for innovative solutions">${currentLanguage === 'zh' ? '尋找創新的解決方案' : 'Look for innovative solutions'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="challenge" value="adaptive" class="mr-3">
                                        <span data-zh="隨機應變，靈活調整" data-en="Adapt and adjust flexibly">${currentLanguage === 'zh' ? '隨機應變，靈活調整' : 'Adapt and adjust flexibly'}</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="flex space-x-4">
                                <button onclick="prevStep()" class="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors font-medium" data-zh="上一步" data-en="Previous">${currentLanguage === 'zh' ? '上一步' : 'Previous'}</button>
                                <button onclick="nextStep()" class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium" data-zh="下一步" data-en="Next Step">${currentLanguage === 'zh' ? '下一步' : 'Next Step'}</button>
                            </div>
                        </div>
                    `;
                    break;
                    
                case 3:
                    content.innerHTML = `
                        <div class="text-center mb-8">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">3</div>
                            <h4 class="text-2xl font-bold mb-2" data-zh="美學偏好" data-en="Aesthetic Preferences">${currentLanguage === 'zh' ? '美學偏好' : 'Aesthetic Preferences'}</h4>
                            <p class="text-gray-600" data-zh="選擇你喜歡的視覺風格" data-en="Choose your preferred visual styles">${currentLanguage === 'zh' ? '選擇你喜歡的視覺風格' : 'Choose your preferred visual styles'}</p>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h5 class="font-semibold mb-4" data-zh="你偏好的色彩風格？" data-en="Your preferred color style?">${currentLanguage === 'zh' ? '你偏好的色彩風格？' : 'Your preferred color style?'}</h5>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <label class="flex flex-col items-center cursor-pointer">
                                        <div class="w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-400 rounded-lg mb-2"></div>
                                        <input type="checkbox" name="colors" value="warm" class="mb-1">
                                        <span class="text-sm" data-zh="溫暖色調" data-en="Warm tones">${currentLanguage === 'zh' ? '溫暖色調' : 'Warm tones'}</span>
                                    </label>
                                    <label class="flex flex-col items-center cursor-pointer">
                                        <div class="w-16 h-16 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-lg mb-2"></div>
                                        <input type="checkbox" name="colors" value="cool" class="mb-1">
                                        <span class="text-sm" data-zh="冷色調" data-en="Cool tones">${currentLanguage === 'zh' ? '冷色調' : 'Cool tones'}</span>
                                    </label>
                                    <label class="flex flex-col items-center cursor-pointer">
                                        <div class="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg mb-2"></div>
                                        <input type="checkbox" name="colors" value="neutral" class="mb-1">
                                        <span class="text-sm" data-zh="中性色調" data-en="Neutral tones">${currentLanguage === 'zh' ? '中性色調' : 'Neutral tones'}</span>
                                    </label>
                                    <label class="flex flex-col items-center cursor-pointer">
                                        <div class="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg mb-2"></div>
                                        <input type="checkbox" name="colors" value="vibrant" class="mb-1">
                                        <span class="text-sm" data-zh="鮮豔色調" data-en="Vibrant tones">${currentLanguage === 'zh' ? '鮮豔色調' : 'Vibrant tones'}</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h5 class="font-semibold mb-4" data-zh="你喜歡的設計風格？" data-en="Your preferred design style?">${currentLanguage === 'zh' ? '你喜歡的設計風格？' : 'Your preferred design style?'}</h5>
                                <div class="space-y-3">
                                    <label class="flex items-center">
                                        <input type="checkbox" name="style" value="minimalist" class="mr-3">
                                        <span data-zh="極簡主義 - 簡潔、純淨、留白" data-en="Minimalist - Clean, pure, spacious">${currentLanguage === 'zh' ? '極簡主義 - 簡潔、純淨、留白' : 'Minimalist - Clean, pure, spacious'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" name="style" value="luxury" class="mr-3">
                                        <span data-zh="奢華風格 - 精緻、華麗、高級" data-en="Luxury - Refined, gorgeous, premium">${currentLanguage === 'zh' ? '奢華風格 - 精緻、華麗、高級' : 'Luxury - Refined, gorgeous, premium'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" name="style" value="natural" class="mr-3">
                                        <span data-zh="自然風格 - 有機、溫暖、親近" data-en="Natural - Organic, warm, approachable">${currentLanguage === 'zh' ? '自然風格 - 有機、溫暖、親近' : 'Natural - Organic, warm, approachable'}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" name="style" value="modern" class="mr-3">
                                        <span data-zh="現代風格 - 科技、前衛、創新" data-en="Modern - Tech, avant-garde, innovative">${currentLanguage === 'zh' ? '現代風格 - 科技、前衛、創新' : 'Modern - Tech, avant-garde, innovative'}</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="flex space-x-4">
                                <button onclick="prevStep()" class="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors font-medium" data-zh="上一步" data-en="Previous">${currentLanguage === 'zh' ? '上一步' : 'Previous'}</button>
                                <button onclick="nextStep()" class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium" data-zh="生成報告" data-en="Generate Report">${currentLanguage === 'zh' ? '生成報告' : 'Generate Report'}</button>
                            </div>
                        </div>
                    `;
                    break;
                    
                case 4:
                    // Generate AI report
                    generateAIReport();
                    break;
            }
        }
        
        function nextStep() {
            // Collect data from current step
            switch(testStep) {
                case 1:
                    testData.name = document.getElementById('name').value;
                    testData.birthday = document.getElementById('birthday').value;
                    testData.zodiac = document.getElementById('zodiac').value;
                    testData.bloodType = document.getElementById('bloodType').value;
                    break;
                case 2:
                    testData.decision = document.querySelector('input[name="decision"]:checked')?.value;
                    testData.environment = document.querySelector('input[name="environment"]:checked')?.value;
                    testData.challenge = document.querySelector('input[name="challenge"]:checked')?.value;
                    break;
                case 3:
                    testData.colors = Array.from(document.querySelectorAll('input[name="colors"]:checked')).map(cb => cb.value);
                    testData.style = Array.from(document.querySelectorAll('input[name="style"]:checked')).map(cb => cb.value);
                    break;
            }
            
            testStep++;
            loadTestStep();
        }
        
        function prevStep() {
            testStep--;
            loadTestStep();
        }
        
        function generateAIReport() {
            const content = document.getElementById('ai-test-content');
            
            // Simulate AI analysis
            const brandNames = ['靈韻香氛', 'Mystic Essence', '心境香調', 'Soul Scent', '能量之源', 'Energy Source'];
            const slogans = ['釋放內在能量', 'Unleash Your Inner Energy', '香氛即靈魂', 'Fragrance is Soul', '獨特如你', 'Unique as You'];
            const fragranceTypes = ['花香調', 'Floral', '木質調', 'Woody', '清新調', 'Fresh', '東方調', 'Oriental'];
            
            const randomBrandName = brandNames[Math.floor(Math.random() * brandNames.length)];
            const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];
            const randomFragrance = fragranceTypes[Math.floor(Math.random() * fragranceTypes.length)];
            
            content.innerHTML = `
                <div class="text-center mb-8">
                    <div class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">✨</div>
                    <h4 class="text-3xl font-bold mb-2" data-zh="你的專屬品牌基因報告" data-en="Your Exclusive Brand Gene Report">${currentLanguage === 'zh' ? '你的專屬品牌基因報告' : 'Your Exclusive Brand Gene Report'}</h4>
                    <p class="text-gray-600" data-zh="AI 已為你分析出獨特的品牌 DNA" data-en="AI has analyzed your unique brand DNA">${currentLanguage === 'zh' ? 'AI 已為你分析出獨特的品牌 DNA' : 'AI has analyzed your unique brand DNA'}</p>
                </div>
                
                <div class="space-y-6">
                    <div class="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6">
                        <h5 class="text-xl font-bold mb-4 text-center" data-zh="🎯 品牌定位分析" data-en="🎯 Brand Positioning Analysis">${currentLanguage === 'zh' ? '🎯 品牌定位分析' : '🎯 Brand Positioning Analysis'}</h5>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-white rounded-lg p-4">
                                <h6 class="font-semibold mb-2" data-zh="建議品牌名稱" data-en="Suggested Brand Name">${currentLanguage === 'zh' ? '建議品牌名稱' : 'Suggested Brand Name'}</h6>
                                <p class="text-2xl font-bold text-purple-600">${randomBrandName}</p>
                            </div>
                            <div class="bg-white rounded-lg p-4">
                                <h6 class="font-semibold mb-2" data-zh="品牌 Slogan" data-en="Brand Slogan">${currentLanguage === 'zh' ? '品牌 Slogan' : 'Brand Slogan'}</h6>
                                <p class="text-lg text-gray-800">"${randomSlogan}"</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6">
                        <h5 class="text-xl font-bold mb-4 text-center" data-zh="🌈 專屬色彩系統" data-en="🌈 Exclusive Color System">${currentLanguage === 'zh' ? '🌈 專屬色彩系統' : '🌈 Exclusive Color System'}</h5>
                        <div class="flex justify-center space-x-4 mb-4">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full"></div>
                            <div class="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full"></div>
                        </div>
                        <p class="text-center text-gray-600" data-zh="基於你的能量頻率，推薦使用紫藍色系作為主色調" data-en="Based on your energy frequency, purple-blue tones are recommended as the main colors">${currentLanguage === 'zh' ? '基於你的能量頻率，推薦使用紫藍色系作為主色調' : 'Based on your energy frequency, purple-blue tones are recommended as the main colors'}</p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6">
                        <h5 class="text-xl font-bold mb-4 text-center" data-zh="🌸 香氛調性建議" data-en="🌸 Fragrance Recommendations">${currentLanguage === 'zh' ? '🌸 香氛調性建議' : '🌸 Fragrance Recommendations'}</h5>
                        <div class="bg-white rounded-lg p-4">
                            <h6 class="font-semibold mb-2" data-zh="推薦香調類型" data-en="Recommended Fragrance Type">${currentLanguage === 'zh' ? '推薦香調類型' : 'Recommended Fragrance Type'}</h6>
                            <p class="text-xl font-bold text-green-600 mb-3">${randomFragrance}</p>
                            <div class="space-y-2">
                                <p><strong data-zh="前調" data-en="Top Notes">${currentLanguage === 'zh' ? '前調' : 'Top Notes'}:</strong> <span data-zh="佛手柑、檸檬、薰衣草" data-en="Bergamot, Lemon, Lavender">${currentLanguage === 'zh' ? '佛手柑、檸檬、薰衣草' : 'Bergamot, Lemon, Lavender'}</span></p>
                                <p><strong data-zh="中調" data-en="Heart Notes">${currentLanguage === 'zh' ? '中調' : 'Heart Notes'}:</strong> <span data-zh="玫瑰、茉莉、天竺葵" data-en="Rose, Jasmine, Geranium">${currentLanguage === 'zh' ? '玫瑰、茉莉、天竺葵' : 'Rose, Jasmine, Geranium'}</span></p>
                                <p><strong data-zh="後調" data-en="Base Notes">${currentLanguage === 'zh' ? '後調' : 'Base Notes'}:</strong> <span data-zh="檀香、麝香、琥珀" data-en="Sandalwood, Musk, Amber">${currentLanguage === 'zh' ? '檀香、麝香、琥珀' : 'Sandalwood, Musk, Amber'}</span></p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6">
                        <h5 class="text-xl font-bold mb-4 text-center" data-zh="📊 目標客群分析" data-en="📊 Target Audience Analysis">${currentLanguage === 'zh' ? '📊 目標客群分析' : '📊 Target Audience Analysis'}</h5>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-white rounded-lg p-4 text-center">
                                <div class="text-2xl mb-2">👥</div>
                                <h6 class="font-semibold" data-zh="主要客群" data-en="Primary Audience">${currentLanguage === 'zh' ? '主要客群' : 'Primary Audience'}</h6>
                                <p class="text-sm text-gray-600" data-zh="25-35歲都會女性" data-en="Urban women 25-35">${currentLanguage === 'zh' ? '25-35歲都會女性' : 'Urban women 25-35'}</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 text-center">
                                <div class="text-2xl mb-2">💰</div>
                                <h6 class="font-semibold" data-zh="價格區間" data-en="Price Range">${currentLanguage === 'zh' ? '價格區間' : 'Price Range'}</h6>
                                <p class="text-sm text-gray-600">NT$ 2,800-4,500</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 text-center">
                                <div class="text-2xl mb-2">🎯</div>
                                <h6 class="font-semibold" data-zh="市場定位" data-en="Market Position">${currentLanguage === 'zh' ? '市場定位' : 'Market Position'}</h6>
                                <p class="text-sm text-gray-600" data-zh="精品小眾香氛" data-en="Niche luxury fragrance">${currentLanguage === 'zh' ? '精品小眾香氛' : 'Niche luxury fragrance'}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center space-y-4">
                        <h5 class="text-xl font-bold" data-zh="準備開始你的品牌孵化之旅？" data-en="Ready to start your brand incubation journey?">${currentLanguage === 'zh' ? '準備開始你的品牌孵化之旅？' : 'Ready to start your brand incubation journey?'}</h5>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onclick="downloadReport()" class="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all font-medium" data-zh="📄 下載完整報告" data-en="📄 Download Full Report">${currentLanguage === 'zh' ? '📄 下載完整報告' : '📄 Download Full Report'}</button>
                            <button onclick="startIncubation()" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium" data-zh="🚀 開始品牌孵化" data-en="🚀 Start Brand Incubation">${currentLanguage === 'zh' ? '🚀 開始品牌孵化' : '🚀 Start Brand Incubation'}</button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        function downloadReport() {
            const reportContent = `
UTOPAN AI 品牌基因報告
========================

測試者：${testData.name || '未提供'}
測試日期：${new Date().toLocaleDateString()}

品牌定位分析
-----------
建議品牌名稱：靈韻香氛
品牌 Slogan：釋放內在能量
品牌個性：優雅、神秘、具有靈性

色彩系統
--------
主色調：紫藍色系
輔助色：粉紫色、深藍色
建議應用：包裝設計、視覺識別

香氛調性建議
-----------
推薦香調：花香調
前調：佛手柑、檸檬、薰衣草
中調：玫瑰、茉莉、天竺葵
後調：檀香、麝香、琥珀

目標客群分析
-----------
主要客群：25-35歲都會女性
價格區間：NT$ 2,800-4,500
市場定位：精品小眾香氛

品牌發展建議
-----------
1. 強調個人化與獨特性
2. 注重包裝設計的精緻度
3. 透過社群媒體建立品牌社群
4. 提供客製化服務增加黏著度

下一步行動
---------
□ 聯繫 UTOPAN 品牌孵化團隊
□ 選擇適合的孵化方案
□ 開始品牌設計與開發流程

聯絡資訊
--------
Email: incubation@utopan.com
Phone: +886-2-1234-5678
Website: www.utopan.com

© 2024 UTOPAN. All rights reserved.
            `;
            
            const blob = new Blob([reportContent], { type: 'text/plain' });
            const url = window.URL.createObject
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97d2bbe7d6a7f1f0',t:'MTc1NzU0NzI0NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
