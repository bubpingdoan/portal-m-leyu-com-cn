'use strict';

(function() {
  const CFG = {
    portalUrl: 'https://portal-m-leyu.com.cn',
    brandName: '乐鱼体育',
    siteName: '乐鱼体育助手',
    version: '1.0.0'
  };

  const KEYWORDS = ['体育赛事', '乐鱼体育', '实时比分', '赛程预告', '数据分析'];

  const TIPS = [
    '点击关键词可快速筛选相关内容',
    '页面提示卡片会显示最新动态',
    '乐鱼体育为您提供全方位赛事服务',
    '访问说明：所有功能均在当前站点内使用'
  ];

  const SAMPLE_DATA = {
    title: '乐鱼体育平台使用指南',
    description: '欢迎使用乐鱼体育，本平台提供丰富的体育赛事资讯与互动功能。',
    cards: [
      { id: 1, label: '赛事速递', content: '今日焦点：乐鱼体育为您带来最新赛事解读' },
      { id: 2, label: '数据看板', content: '核心指标：乐鱼体育用户活跃度持续攀升' },
      { id: 3, label: '互动专区', content: '参与话题 #乐鱼体育# 赢取专属好礼' }
    ]
  };

  function createCardElement(card) {
    const div = document.createElement('div');
    div.className = 'tip-card';
    div.setAttribute('data-id', card.id);
    const h3 = document.createElement('h3');
    h3.textContent = card.label;
    const p = document.createElement('p');
    p.textContent = card.content;
    div.appendChild(h3);
    div.appendChild(p);
    return div;
  }

  function createKeywordBadge(word) {
    const span = document.createElement('span');
    span.className = 'keyword-badge';
    span.textContent = word;
    span.addEventListener('click', function() {
      alert('关键词：' + word + '（来自' + CFG.brandName + '）');
    });
    return span;
  }

  function buildInfoSection() {
    const section = document.createElement('section');
    section.className = 'site-helper-section';

    const header = document.createElement('header');
    const title = document.createElement('h2');
    title.textContent = SAMPLE_DATA.title;
    header.appendChild(title);
    section.appendChild(header);

    const desc = document.createElement('p');
    desc.textContent = SAMPLE_DATA.description;
    section.appendChild(desc);

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    SAMPLE_DATA.cards.forEach(function(card) {
      cardsContainer.appendChild(createCardElement(card));
    });
    section.appendChild(cardsContainer);

    const badgesContainer = document.createElement('div');
    badgesContainer.className = 'badges-container';
    KEYWORDS.forEach(function(kw) {
      badgesContainer.appendChild(createKeywordBadge(kw));
    });
    section.appendChild(badgesContainer);

    const accessNote = document.createElement('div');
    accessNote.className = 'access-note';
    accessNote.innerHTML = '<strong>访问说明：</strong>当前站点 <a href="' + CFG.portalUrl + '" target="_blank" rel="noopener noreferrer">' + CFG.portalUrl + '</a> 由' + CFG.brandName + '提供支持，所有提示卡片和关键词徽章均为辅助功能。';
    section.appendChild(accessNote);

    const tipBox = document.createElement('div');
    tipBox.className = 'tip-box';
    const tipList = document.createElement('ul');
    TIPS.forEach(function(tip) {
      const li = document.createElement('li');
      li.textContent = tip;
      tipList.appendChild(li);
    });
    tipBox.appendChild(tipList);
    section.appendChild(tipBox);

    return section;
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        const helperSection = buildInfoSection();
        document.body.appendChild(helperSection);
      });
    } else {
      const helperSection = buildInfoSection();
      document.body.appendChild(helperSection);
    }
  }

  init();
})();