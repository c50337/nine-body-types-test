// 綁定提交按鈕的點擊事件
document.getElementById("submit").addEventListener("click", () => {
    // 初始化九大體質的計分
    const answers = {
        "平和體質": 0,
        "氣虛體質": 0,
        "陽虛體質": 0,
        "陰虛體質": 0,
        "痰濕體質": 0,
        "濕熱體質": 0,
        "血瘀體質": 0,
        "氣鬱體質": 0,
        "特稟體質": 0
    };

    // 收集每個問題的答案
    for (let i = 1; i <= 12; i++) { // 總共 12 道題目
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            // 增加該體質的分數
            answers[selected.value]++;
        }
    }

    // 確認所有問題是否都已回答
    if (Object.values(answers).every(score => score === 0)) {
        alert("請回答所有問題後再提交測試！");
        return;
    }

    // 找到得分最高的體質
    const resultType = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);

    // 顯示結果
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `您的體質是：${resultType}`;

    // 個性化建議（可選）
    const advice = {
        "平和體質": "恭喜您，體質平和！保持均衡飲食和規律生活，繼續保持健康。",
        "氣虛體質": "您的體質偏氣虛，建議多吃補氣的食物，如黃芪、紅棗和枸杞，並適量運動增強體力。",
        "陽虛體質": "您屬於陽虛體質，建議多吃溫熱性食物如羊肉、生薑，注意保暖。",
        "陰虛體質": "您的體質偏陰虛，建議多喝湯水滋潤，多吃百合、銀耳和蓮子。",
        "痰濕體質": "您屬於痰濕體質，建議少吃油膩食物，多吃薏米、冬瓜等清淡食材。",
        "濕熱體質": "您的體質偏濕熱，建議少吃辛辣油膩食物，多喝菊花茶或綠豆湯。",
        "血瘀體質": "您屬於血瘀體質，建議多吃促進血液循環的食物，如黑豆、紅糖和黑木耳。",
        "氣鬱體質": "您的體質偏氣鬱，建議多做深呼吸和放鬆運動，飲食可多選擇玫瑰花茶。",
        "特稟體質": "您屬於特稟體質，容易過敏，建議遠離過敏原，多吃富含維生素C的食物。"
    };

    // 顯示體質建議
    if (advice[resultType]) {
        resultDiv.textContent += `\n建議：${advice[resultType]}`;
    }
});