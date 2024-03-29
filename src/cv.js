let cvhtml = `<div id="dir">`;

let langs = ["en", "it", "jp"];

let downloads = { "en": "", "it": "", "jp": "" };

let formats = {
	"about": (content, metadata) => {
		//let inner = `<div class="picture-cont"><img class="picture-me" src="${metadata.img}" alt="PIC">`;
		let inner = `<div class="data-points">`;
		for (let i = 0; i < content.length; i++) {
			inner += formats[content[i].format](content[i]);
		}
		return inner + `</div>`;
	},
	"none": (content) => {
		let inner = "";
		for (let i = 0; i < content.length; i++) {
			inner += formats[content[i].format](content[i]);
		}
		return inner;
	},
	"p": (content) => {
		return `<p>${content.text}</p>`;
	},
	"ipa": (content) => {
		return `<p>[<span class="IPA">${content.text}</span>]</p>`;
	},
	"ul": (content) => {
		let inner = `<div class="list-section">`;
		if (content.text != undefined) {
			inner += `<b>${content.text}</b>`;
		}
		inner += `<ul>`;
		for (let i = 0; i < content.sub.length; i++) {
			inner += `<li>${content.sub[i]}</li>`;
		}
		return inner + `</ul></div>`;
	},
	"link": (content) => {
		return `<a target="_blank" rel="noopener noreferrer" href="${content.href}">${content.text}</a>`;
	},
	"table": (content) => {
		let inner = `<table class="inner-table">`;
		for (let i = 0; i < content.rows.length; i++) {
			inner += `<tr>`;
			let row = content.rows[i];
			for (let j = 0; j < row.length; j++) {
				inner += `<td>${formats[row[j].format](row[j])}</td>`;
			}
			inner += `</tr>`;
		}
		return inner + `</table>`;
	}
}

for (let i = 0; i < CV.length; i++) {
	cvhtml += `+<a href="#${CV[i].id}"> ${CV[i].en.title.toUpperCase()}・${CV[i].it.title.toUpperCase()}・${CV[i].jp.title.toUpperCase()}</a><br>`;
}
cvhtml += `</div>`;

for (let i = 0; i < CV.length; i++) {
	cvhtml += `<div><a name="${CV[i].id}"></a>`;
	cvhtml += `<h1>${CV[i].en.title.toUpperCase()}・${CV[i].it.title.toUpperCase()}・${CV[i].jp.title.toUpperCase()}</h1>`;

	cvhtml += `<div class="buttons">`;
	cvhtml += `<button class="tab-button en ${CV[i].id} selected" onclick="openTab('en', '${CV[i].id}')">EN</button>`;
	cvhtml += `<button class="tab-button it ${CV[i].id}" onclick="openTab('it', '${CV[i].id}')">IT</button>`;
	cvhtml += `<button class="tab-button jp ${CV[i].id}" onclick="openTab('jp', '${CV[i].id}')">和</button>`;
	cvhtml += `</div>`;

	langs.forEach((lang) => {
		let temp = ``;

		cvhtml += `<div class="section ${lang} ${CV[i].id}${lang != "en" ? " collapsed" : ""}">`;
		temp += formats[CV[i].metadata.format](CV[i][lang].content, CV[i].metadata);
		temp += `</div>`

		downloads[lang] += `<tr><td><span class="cv-table-title">${CV[i][lang].title.toUpperCase()}</span></td><td><div class="section ${lang} ${CV[i].id}">${temp}</td></tr>`;
		cvhtml += temp;
	});

	cvhtml += `</div>`;
}

const banner_info = {
	"en":
	{
		"name": "Benjamin Park",
		"position": `Associate Software Engineer`,
		"address": `1855 Stratford Park Place, Reston, VA 20190`,
		"notes": [
			`parkbenjamin2@gmail.com`,
			`727-244-2601`,
			`https://nallantli.github.io/c_vitae.html`
		]
	},
	"it":
	{
		"name": "Benjamin Park",
		"position": `Ingegnere Associato del Software`,
		"address": `1855 Stratford Park Place, Reston, VA 20190`,
		"notes": [
			`parkbenjamin2@gmail.com`,
			`727-244-2601`,
			`https://nallantli.github.io/c_vitae.html`
		]
	},
	"jp":
	{
		"name": "ベンジャミン・パーク",
		"position": `準ソフトウェア工学者`,
		"address": `バージニア州のレストンの1855ストラットフォード・パーク・プレース（20190）`,
		"notes": [
			`parkbenjamin2@gmail.com`,
			`727-244-2601`,
			`https://nallantli.github.io/c_vitae.html`
		]
	}
};

let cvbanner = (() => {
	let langs = {};
	Object.keys(banner_info).forEach(lang => {
		const data = banner_info[lang];
		let temp = `<div class="banner"><div class="banner-name">${data.name}</div>`;
		temp += `<div class="banner-position">${data.position}</div>`;
		temp += `<table class="banner-notes"><tr>`;
		data.notes.forEach(note => {
			temp += `<td>${note}</td>`;
		});
		temp += `</tr></table><div class="banner-address">${data.address}</div>`;
		langs[lang] = temp + `</div>`;
	});
	return langs;
})();

langs.forEach((lang) => {
	downloads[lang] = `<html><head><meta charset='utf-8'><link rel="stylesheet" href="src/Web/css/ibm-plex.min.css"><link rel="stylesheet" href="src/cvwhite.css"></head><body>${cvbanner[lang]}<table class="cvtable">${downloads[lang]}</table><div class="footer">Academic and Professional references available upon request.</div></body></html>`
});

function download(lang) {
	var printWindow = window.open('', '');
	printWindow.document.write(downloads[lang]);
	printWindow.document.close();
	printWindow.focus();
}

document.getElementById("cv-body").innerHTML = cvhtml;