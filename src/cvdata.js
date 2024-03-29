const CV = [{
	"id": "about",
	"metadata": {
		"format": "about",
		"img": "src/me.png"
	},
	"en": {
		"title": "Who Am I",
		"content": [
			{
				"format": "p",
				"text": `${Math.floor((new Date() - new Date("1998/05/22")) / (365 * 24 * 60 * 60 * 1000))} Years Old - Born on May 22, 1998`
			},
			{
				"format": "ul",
				"text": "Interests",
				"sub": [
					"Languages Proper (i.e. spoken languages)",
					"Programming Languages",
					"Mathematics",
					"Music/Piano"
				]
			}
		]
	},
	"it": {
		"title": "Chi Sono",
		"content": [
			{
				"format": "p",
				"text": `${Math.floor((new Date() - new Date("1998/05/22")) / (365 * 24 * 60 * 60 * 1000))} Anni - Nato il 22 Maggio, 1998`
			},
			{
				"format": "ul",
				"text": "Interessi",
				"sub": [
					"Linguaggi Parlanti",
					"Linguaggi di Programazione",
					"Matematica",
					"Musica/Piano"
				]
			}
		]
	},
	"jp": {
		"title": "私は",
		"content": [
			{
				"format": "p",
				"text": `${Math.floor((new Date() - new Date("1998/05/22")) / (365 * 24 * 60 * 60 * 1000))}歳、1998年の五月の22日に生まれ`
			},
			{
				"format": "ul",
				"text": "興味",
				"sub": [
					"話している言語",
					"プログラミング言語",
					"数学",
					"音楽・ピアノ"
				]
			}
		]
	}
},
{
	"id": "goals",
	"metadata": {
		"format": "none"
	},
	"en": {
		"title": "Goals",
		"content": [
			{
				"format": "p",
				"text": `I want to find work that is both challenging and fulfulling, and would allow me to further use both my technical and linguistics skills in an applied environment.<div style="margin-bottom: 10px"></div>`
			},
			{
				"format": "p",
				"text": `I look forward to engaging in a work environment with a professional, exciting atmosphere.<div style="margin-bottom: 10px"></div>`
			}
		]
	},
	"it": {
		"title": "Obiettivi",
		"content": [
			{
				"format": "p",
				"text": `Vorrei fare alcuno che sento essere con significanza e fa meglio il mondo.`
			},
			{
				"format": "p",
				"text": `Il mio obiettivo a lungo termine è diventare professore di Linguistica ed eventualmente cattedratico.`
			}
		]
	},
	"jp": {
		"title": "目的",
		"content": [
			{
				"format": "p",
				"text": `何か有意があるようで世界がよろしくできることをしたい`
			},
			{
				"format": "p",
				"text": `結局の目的はテニュアがある言語学博士になっていることだ。`
			}
		]
	}
},
{
	"id": "edu",
	"metadata": {
		"format": "none"
	},
	"en": {
		"title": "Education",
		"content": [
			{
				"format": "p",
				"text": `Completed a Bachelor's of Arts in Linguistics from the University of Florida as of August 2020. Aside from general linguistics, emphasized studies in Japanese, literature, and syntactic analysis.<div style="margin-bottom: 10px"></div>`
			},
			{
				"format": "p",
				"text": `Graduate of the International Baccalaureate Programme from Palm Harbor University High School. Extended Essay was on Mathematics and concerned the evaluation of Monte Carlo Integration.<div style="margin-bottom: 10px"></div>`
			}
		]
	},
	"it": {
		"title": "Istruzione",
		"content": [
			{
				"format": "p",
				"text": `Laureato in Linguistica all'Università della Florida (UF) ad agosto 2020.`
			},
			{
				"format": "p",
				"text": `Diplomato con il Programma International Baccalaureate (IB) presso il liceo "Palm Harbor University High School". Il tema della mia Tesi è stato in Matematica, con particolare attenzione sull' "Integrazione Monte Carlo".`
			}
		]
	},
	"jp": {
		"title": "教育",
		"content": [
			{
				"format": "p",
				"text": `二千二十年の八月ごろ言語学の学士をもらってフロリダ大学から卒業したのになった。`
			},
			{
				"format": "p",
				"text": `パーム・ハーバー高校大学の高校での国際バカロレアのプログラムから卒業していた。課題論文の話題は数学について書いて モンテカルロ積分の生成をもとにして書いていた。`
			}
		]
	}
},
{
	"id": "exp",
	"metadata": {
		"format": "none"
	},
	"en": {
		"title": "Experience",
		"content": [
			{
				"format": "ul",
				"text": `University (2016 - 2020)`,
				"sub": [
					`Tutor for teaching English within UF's Foreign Language Organization (1 Year)`,
					`Presenter and Vice President of the UF Undergraduate Linguistics Society (3 Years)`,
					`<b>Japanese Teaching Assistant at the University of Florida (1 Year)</b><div class="description">With 3 years of university level courses, assisted as a teaching assistant for the Japanese language course.</div>`
				]
			},
			{
				"format": "ul",
				"text": `Post-University (2020 - *)`,
				"sub": [
					`<b>Associate Software Engineer for Cvent (May 2021 - *)</b><div class="description">Develop features for event management software, both on the front and backend. Uses languages and APIs such as: Java, JavaScript, React, Node</div>`
				]
			}
		]
	},
	"it": {
		"title": "Esperienza",
		"content": [
			{
				"format": "ul",
				"text": `Università (2016 - 2020)`,
				"sub": [
					`Istruttore d'inglese per l'Organizzazione di Lingue Straniere della UF (1 Anno)`,
					`Corrispondente Tecnologico per il "Centro 1455" dell'Arte Letteraria (in corso)`,
					`Istruttore di Letteratura Inglese e di Matematica per Tutor.org (2 Anni)`,
					`Socio del team per le competizioni tra Programmatori per la UF (1 Anno)`,
					`Socio del Club di Programmazione per l'Intelligenza Artificiale alla UF (1 Anno)`,
					`Relatore e Vicepresidente della Società di Linguistica alla UF (3 Anni)`
				]
			},
			{
				"format": "ul",
				"text": `Dopo Università (2020 - *)`,
				"sub": [
					`Associate Software Engineer per Cvent (Maggio 2021 - *)`
				]
			}
		]
	},
	"jp": {
		"title": "体験",
		"content": [
			{
				"format": "ul",
				"text": `大学（2016～2020）`,
				"sub": [
					`フロリダ大学外国語協会での英語のチューター（1年間）`,
					`1455文学美術協会でのテクノロジー業者（進行中）`,
					`Tutor.orgでの英語文学と数学のチューター（2年間）`,
					`フロリダ大学競プログラミングのチームでのメンバー（1年間）`,
					`フロリダ大学人工知能プログラミングクラブでのメンバー（1年間）`,
					`フロリダ大学言語学学部生協会での講演者と副大統領（3年間）`
				]
			},
			{
				"format": "ul",
				"text": `大学の後（2020～〇）`,
				"sub": [
					`Cventの「Associate Software Engineer」（2020の五月～〇）`
				]
			}
		]
	}
},
{
	"id": "software",
	"metadata": {
		"format": "none"
	},
	"en": {
		"title": "Software & API",
		"content": [
			{
				"format": "ul",
				"text": `Programming`,
				"sub": [
					`IntelliJ`,
					`WebStorm`,
					`Visual Studio Code (VSCode)`,
					`Visual Studio`,
					`React.js`,
					`Node/NPM/NPX`
				]
			},
			{
				"format": "ul",
				"text": `Linguistics`,
				"sub": [
					`Praat`,
				]
			},
			{
				"format": "ul",
				"text": `Design`,
				"sub": [
					`Adobe Photoshop`,
					`Adobe Illustrator`,
					`Adobe InDesign`,
					`Adobe AfterEffects`,
					`FontForge`
				]
			},
			{
				"format": "ul",
				"text": `General`,
				"sub": [
					`Microsoft Office (Word, Excel, Publisher, PowerPoint)`,
					`Google Office Suite`
				]
			}
		]
	},
	"it": {
		"title": "Software & API",
		"content": [
			{
				"format": "ul",
				"text": `Programmazione`,
				"sub": [
					`IntelliJ`,
					`WebStorm`,
					`Visual Studio Code (VSCode)`,
					`Visual Studio`,
					`React.js`,
					`Node/NPM/NPX`
				]
			},
			{
				"format": "ul",
				"text": `Linguistica`,
				"sub": [
					`Praat`,
				]
			},
			{
				"format": "ul",
				"text": `Design`,
				"sub": [
					`Adobe Photoshop`,
					`Adobe Illustrator`,
					`Adobe InDesign`,
					`Adobe AfterEffects`,
					`FontForge`
				]
			},
			{
				"format": "ul",
				"text": `Generale`,
				"sub": [
					`Microsoft Office`,
					`Google Office Suite`
				]
			}
		]
	},
	"jp": {
		"title": "ソフトウェアとAPI",
		"content": [
			{
				"format": "ul",
				"text": `プログラミング`,
				"sub": [
					`IntelliJ`,
					`WebStorm`,
					`Visual Studio Code (VSCode)`,
					`Visual Studio`,
					`React.js`,
					`Node/NPM/NPX`
				]
			},
			{
				"format": "ul",
				"text": `言語学`,
				"sub": [
					`Praat`,
				]
			},
			{
				"format": "ul",
				"text": `デザイン`,
				"sub": [
					`Adobe Photoshop`,
					`Adobe Illustrator`,
					`Adobe InDesign`,
					`Adobe AfterEffects`,
					`FontForge`
				]
			},
			{
				"format": "ul",
				"text": `一般`,
				"sub": [
					`Microsoft Office (Word, Excel, Publisher, PowerPoint)`,
					`Google Office Suite`
				]
			}
		]
	}
},
{
	"id": "proj",
	"metadata": {
		"format": "none"
	},
	"en": {
		"title": "Projects & Languages",
		"content": [
			{
				"format": "table",
				"rows": [
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/Sono",
							"text": `Sono`
						},
						{
							"format": "p",
							"text": `High-Level Interpreted Programming Language for linguistic analysis and general use`
						},
						{
							"format": "p",
							"text": `Java/JS`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Ruota-Lang/Ruota",
							"text": `Ruota`
						},
						{
							"format": "p",
							"text": `High-Level Interpreted Programming Language`
						},
						{
							"format": "p",
							"text": `C++`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/US-Route-Mapping",
							"text": `US Route Mapping`
						},
						{
							"format": "p",
							"text": `Uses road data to find paths between cities`
						},
						{
							"format": "p",
							"text": `JS/Java`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/TerrainGenerator",
							"text": `Terrain Generator`
						},
						{
							"format": "p",
							"text": `Terrain Generator Using Simplex Noise`
						},
						{
							"format": "p",
							"text": `JS`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/NallanChatCLI",
							"text": `NallanChat`
						},
						{
							"format": "p",
							"text": `Command-Line-Based Chat Client`
						},
						{
							"format": "p",
							"text": `NodeJS`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/NallanChatServer",
							"text": `NallanChat Server`
						},
						{
							"format": "p",
							"text": `Server for NallanChat`
						},
						{
							"format": "p",
							"text": `NodeJS`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/NodeSimulation",
							"text": `Node Simulation`
						},
						{
							"format": "p",
							"text": `A* Search Through Randomly Generated Nodes`
						},
						{
							"format": "p",
							"text": `Java`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/JSyntaxTree",
							"text": `JSyntaxTree`
						},
						{
							"format": "p",
							"text": `Syntax Tree Builder`
						},
						{
							"format": "p",
							"text": `Java`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/Pitch-Accent-Helper",
							"text": `Pitch Accent Helper`
						},
						{
							"format": "p",
							"text": `Demo Exploring Pitch Accent in Japanese`
						},
						{
							"format": "p",
							"text": `JS`
						}
					],
					[
						{
							"format": "link",
							"href": "https://github.com/Nallantli/general-repo/tree/master/cpp/Neural%20Network",
							"text": `Neural Network`
						},
						{
							"format": "p",
							"text": `Simple Neural Network Implementation`
						},
						{
							"format": "p",
							"text": `C++`
						}
					]
				]
			},
			{
				"format": "table",
				"rows": [
					[{
						"format": "p",
						"text": `English`
					},
					{
						"format": "ipa",
						"text": `ˈɪ̃ŋ.glɪʃ`
					},
					{
						"format": "p",
						"text": `Native`
					}
					],
					[{
						"format": "p",
						"text": `Italian`
					},
					{
						"format": "ipa",
						"text": `i.taˈlja.no`
					},
					{
						"format": "p",
						"text": `Advanced`
					}
					],
					[{
						"format": "p",
						"text": `Japanese`
					},
					{
						"format": "ipa",
						"text": `ɲi.hõŋ.go`
					},
					{
						"format": "p",
						"text": `Advanced`
					}
					],
					[{
						"format": "p",
						"text": `Spanish`
					},
					{
						"format": "ipa",
						"text": `es.paˈɲɔl`
					},
					{
						"format": "p",
						"text": `Conversational`
					}
					],
					[{
						"format": "p",
						"text": `Latin`
					},
					{
						"format": "ipa",
						"text": `laˈti.na`
					},
					{
						"format": "p",
						"text": `Upper Intermediate`
					}
					]
				]
			}
		]
	},
	"it": {
		"title": "Progetti",
		"content": [
			{
				"format": "table",
				"rows": [
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/Sono",
						"text": `Sono`
					},
					{
						"format": "p",
						"text": `Linguaggio Interpretativo di Programmazione ad Alto Livello per analisi linguistica e l’uso generale`
					},
					{
						"format": "ul",
						"sub": [
							`Java`,
							`JS`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Ruota-Lang/Ruota",
						"text": `Ruota`
					},
					{
						"format": "p",
						"text": `Linguaggio Interpretativo di Programmazione ad Alto Livello`
					},
					{
						"format": "ul",
						"sub": [
							`C++`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/US-Route-Mapping",
						"text": `Mappagio di Strade SU`
					},
					{
						"format": "p",
						"text": `Utilizzo di dati - strade per trovare i percorsi tra città`
					},
					{
						"format": "ul",
						"sub": [
							`JS`,
							`Java`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/TerrainGenerator",
						"text": `Generatore Terreno`
					},
					{
						"format": "p",
						"text": `Generazione di Terreno simulatore che usa Simplex Noise`
					},
					{
						"format": "ul",
						"sub": [
							`JS`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/NallanChatCLI",
						"text": `NallanChat`
					},
					{
						"format": "p",
						"text": `Cliente di Comuncazione a Riga di Comando`
					},
					{
						"format": "ul",
						"sub": [
							`NodeJS`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/NallanChatServer",
						"text": `NallanChat Server`
					},
					{
						"format": "p",
						"text": `Server per NallanChat`
					},
					{
						"format": "ul",
						"sub": [
							`NodeJS`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/NodeSimulation",
						"text": `Simulazione di Nodi`
					},
					{
						"format": "p",
						"text": `Algoritmo A* con Nodi Generati casualmente`
					},
					{
						"format": "ul",
						"sub": [
							`Java`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/JSyntaxTree",
						"text": `JSyntaxTree`
					},
					{
						"format": "p",
						"text": `Generatore di Schemi Sintatici (Linguistichi)`
					},
					{
						"format": "ul",
						"sub": [
							`Java`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/Pitch-Accent-Helper",
						"text": `Aiutante d'Accento Tonale`
					},
					{
						"format": "p",
						"text": `Demo che esplora Accento Tonale in giapponese`
					},
					{
						"format": "ul",
						"sub": [
							`JS`
						]
					}
					],
					[{
						"format": "link",
						"href": "https://github.com/Nallantli/general-repo/tree/master/cpp/Neural%20Network",
						"text": `Rete Neurale`
					},
					{
						"format": "p",
						"text": `Implementazione Semplice di Rete Neurale`
					},
					{
						"format": "ul",
						"sub": [
							`C++`
						]
					}
					]
				]
			}]
	},
	"jp": {
		"title": "事業",
		"content": [{
			"format": "table",
			"rows": [
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/Sono",
					"text": `ソーノ`
				},
				{
					"format": "p",
					"text": `言語学の解析や一般的な仕方のために出来たインタプリタ用の高水準言語`
				},
				{
					"format": "ul",
					"sub": [
						`Java`,
						`JS`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Ruota-Lang/Ruota",
					"text": `ルオタ`
				},
				{
					"format": "p",
					"text": `インタプリタ用の高水準言語`
				},
				{
					"format": "ul",
					"sub": [
						`C++`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/US-Route-Mapping",
					"text": `アメリカの道の写像`
				},
				{
					"format": "p",
					"text": `町の間での進路を作られるために道の資料を使う`
				},
				{
					"format": "ul",
					"sub": [
						`JS`,
						`Java`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/TerrainGenerator",
					"text": `地形の生成器`
				},
				{
					"format": "p",
					"text": `シンプレックス・ノイズを使う地形の生成器`
				},
				{
					"format": "ul",
					"sub": [
						`JS`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/NallanChatCLI",
					"text": `ナーランチャット`
				},
				{
					"format": "p",
					"text": `通信の端末クライアント`
				},
				{
					"format": "ul",
					"sub": [
						`NodeJS`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/NallanChatServer",
					"text": `ナーランチャットのサーバー`
				},
				{
					"format": "p",
					"text": `ナーランチャットのためのサーバー`
				},
				{
					"format": "ul",
					"sub": [
						`NodeJS`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/NodeSimulation",
					"text": `節点の模擬`
				},
				{
					"format": "p",
					"text": `A＊のアルゴリズムを使う無作為な節点の地図`
				},
				{
					"format": "ul",
					"sub": [
						`Java`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/JSyntaxTree",
					"text": `ジェイシンタックスツリー`
				},
				{
					"format": "p",
					"text": `統語論ツリーの生成器`
				},
				{
					"format": "ul",
					"sub": [
						`Java`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/Pitch-Accent-Helper",
					"text": `高低アクセントの手伝い`
				},
				{
					"format": "p",
					"text": `日本語の高低アクセントを探るデモ`
				},
				{
					"format": "ul",
					"sub": [
						`JS`
					]
				}
				],
				[{
					"format": "link",
					"href": "https://github.com/Nallantli/general-repo/tree/master/cpp/Neural%20Network",
					"text": `ニューラルネットワーク`
				},
				{
					"format": "p",
					"text": `簡単なニューラルネットワークの実現`
				},
				{
					"format": "ul",
					"sub": [
						`C++`
					]
				}
				]
			]
		},
		{
			"format": "table",
			"rows": [
				[{
					"format": "p",
					"text": `English`
				},
				{
					"format": "ipa",
					"text": `ˈɪ̃ŋ.glɪʃ`
				},
				{
					"format": "p",
					"text": `Native`
				}
				],
				[{
					"format": "p",
					"text": `Italian`
				},
				{
					"format": "ipa",
					"text": `i.taˈlja.no`
				},
				{
					"format": "p",
					"text": `Advanced`
				}
				],
				[{
					"format": "p",
					"text": `Japanese`
				},
				{
					"format": "ipa",
					"text": `ɲi.hõŋ.go`
				},
				{
					"format": "p",
					"text": `Advanced`
				}
				],
				[{
					"format": "p",
					"text": `Spanish`
				},
				{
					"format": "ipa",
					"text": `es.paˈɲɔl`
				},
				{
					"format": "p",
					"text": `Conversational`
				}
				],
				[{
					"format": "p",
					"text": `Latin`
				},
				{
					"format": "ipa",
					"text": `laˈti.na`
				},
				{
					"format": "p",
					"text": `Upper Intermediate`
				}
				]
			]
		}]
	}
},
{
	"id": "lang",
	"metadata": {
		"format": "none"
	},
	"en": {
		"title": "Languages",
		"content": [
			{
				"format": "table",
				"rows": [
					[{
						"format": "p",
						"text": `English`
					},
					{
						"format": "ipa",
						"text": `ˈɪ̃ŋ.glɪʃ`
					},
					{
						"format": "p",
						"text": `Native`
					}
					],
					[{
						"format": "p",
						"text": `Italian`
					},
					{
						"format": "ipa",
						"text": `i.taˈlja.no`
					},
					{
						"format": "p",
						"text": `Advanced`
					}
					],
					[{
						"format": "p",
						"text": `Japanese`
					},
					{
						"format": "ipa",
						"text": `ɲi.hõŋ.go`
					},
					{
						"format": "p",
						"text": `Advanced (3 Years of University-level Courses)`
					}
					],
					[{
						"format": "p",
						"text": `Spanish`
					},
					{
						"format": "ipa",
						"text": `es.paˈɲɔl`
					},
					{
						"format": "p",
						"text": `Conversational`
					}
					],
					[{
						"format": "p",
						"text": `Latin`
					},
					{
						"format": "ipa",
						"text": `laˈti.na`
					},
					{
						"format": "p",
						"text": `Upper Intermediate`
					}
					]
				]
			}]
	},
	"it": {
		"title": "Lingue",
		"content": [{
			"format": "table",
			"rows": [
				[{
					"format": "p",
					"text": `Inglese`
				},
				{
					"format": "ipa",
					"text": `ˈɪ̃ŋ.glɪʃ`
				},
				{
					"format": "p",
					"text": `Nativo`
				}
				],
				[{
					"format": "p",
					"text": `Italiano`
				},
				{
					"format": "ipa",
					"text": `i.taˈlja.no`
				},
				{
					"format": "p",
					"text": `Avanzato`
				}
				],
				[{
					"format": "p",
					"text": `Giapponese`
				},
				{
					"format": "ipa",
					"text": `ɲi.hõŋ.go`
				},
				{
					"format": "p",
					"text": `Avanzato`
				}
				],
				[{
					"format": "p",
					"text": `Spagnolo`
				},
				{
					"format": "ipa",
					"text": `es.paˈɲɔl`
				},
				{
					"format": "p",
					"text": `Posso conversare`
				}
				],
				[{
					"format": "p",
					"text": `Latino`
				},
				{
					"format": "ipa",
					"text": `laˈti.na`
				},
				{
					"format": "p",
					"text": `Avanzato ma non ad alto livello`
				}
				]
			]
		}]
	},
	"jp": {
		"title": "言語",
		"content": [{
			"format": "table",
			"rows": [
				[{
					"format": "p",
					"text": `英語`
				},
				{
					"format": "ipa",
					"text": `ˈɪ̃ŋ.glɪʃ`
				},
				{
					"format": "p",
					"text": `母語`
				}
				],
				[{
					"format": "p",
					"text": `イタリア語`
				},
				{
					"format": "ipa",
					"text": `i.taˈlja.no`
				},
				{
					"format": "p",
					"text": `上級`
				}
				],
				[{
					"format": "p",
					"text": `日本語`
				},
				{
					"format": "ipa",
					"text": `ɲi.hõŋ.go`
				},
				{
					"format": "p",
					"text": `上級`
				}
				],
				[{
					"format": "p",
					"text": `スペイン語`
				},
				{
					"format": "ipa",
					"text": `es.paˈɲɔl`
				},
				{
					"format": "p",
					"text": `会話力がいい`
				}
				],
				[{
					"format": "p",
					"text": `ラテン語`
				},
				{
					"format": "ipa",
					"text": `laˈti.na`
				},
				{
					"format": "p",
					"text": `中級よりちょっと高い`
				}
				]
			]
		}]
	}
}
];