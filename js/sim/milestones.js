'use strict';
// ライフマイルストーン（入学・卒業・就職・初経など）

function recordMilestone(key, text, diary = null, month = null) {
  if (s.flags['milestone_' + key]) return;
  s.flags['milestone_' + key] = true;
  const prevM = s.current_month;
  if (month != null) s.current_month = month;
  log(text, ageDiary(diary));
  if (month != null) s.current_month = prevM;
}
function lifeMilestones(isBirthMonth = false) {
  const a = s.age;
  const m = s.current_month || 4;
  // 4月生まれの場合は3月時点では誕生日直前（a歳）で翌4月にa+1歳になるため、3月卒業判定の学年年齢を補正
  const schoolAge = (m === 3 && s.birth_month === 4) ? a + 1 : a;

  // === 3月：卒業マイルストーン ===
  if (m === 3) {
    // 小学校卒業（3月）
    if (schoolAge === 12 && s.flags.milestone_elementary) {
      recordMilestone('elem_grad', '小学校を卒業した。慣れ親しんだ校舎と友達に別れを告げ、ランドセルを下ろした。', '6年間通った小学校とお別れ。友達とアルバムにメッセージを書き合って別れを惜しんだ。');
    }
    // 中学校卒業（3月）
    if (schoolAge === 15 && s.flags.milestone_middle_entry) {
      recordMilestone('middle_grad', '中学校を卒業した。義務教育を終え、それぞれ別の道へ進む仲間たちと記念写真を撮った。', 'あっという間の3年間だった。仲良くなったみんなと離れるのは寂しい。');
    }
    // 高校卒業（3月）
    if (schoolAge === 18 && s.flags.milestone_high_entry) {
      recordMilestone('high_grad', '高校を卒業した。制服を着る日々が終わり、かけがえのない青春に別れを告げた。', '制服を着る日々が終わった。まだ実感はないけれど、人生の節目だと思う。');
    }
    // 大学卒業（3月）：入学から4年目の3月に卒業
    const entryAge = s.flags.university_entry_age || 18;
    const monthsInUni = (s.age_months || 0) - (s.flags.university_entry_age_months ?? (entryAge * 12));
    if (s.flags.university && (monthsInUni >= 44 || schoolAge === entryAge + 4)) {
      s.flags.university = false;
      s.flags.university_graduated = true;
      s.flags.just_graduated_uni = true;
      const isAdultStudent = entryAge >= 25;
      const gradText = isAdultStudent
        ? '社会人学生としての4年間の学びを修め、大学を卒業した。'
        : (entryAge > 18 ? `${entryAge - 18}年遅れで掴んだ大学生活を駆け抜け、袴を身にまとい誇らしく卒業した。` : '大学を卒業した。袴を身にまとい、学生生活にピリオドを打った。');
      const diaryText = isAdultStudent
        ? '仕事や生活と両立しながらやり遂げた。この経験と知識は一生の財産になると思う。'
        : '学んだことも、出会った人も、これからの私を支えてくれると思う。';
      recordMilestone('unigrad_' + schoolAge, gradText, diaryText);
    }
  }

  // === 4月：入学・進学・新年度就職マイルストーン ===
  if (m === 4) {
    // 3歳：幼稚園・保育園（4月）
    if (a === 3) recordMilestone('preschool', '幼稚園・保育園などに通う年頃になった。', null);

    // 6歳：小学校入学（4月）
    if (a === 6) {
      s.occupation = '学生';
      recordMilestone('elementary', '小学校に入学した。ピカピカのランドセルを背負い、桜舞う通学路を歩いた。', '新しい教室、新しい友達。少し緊張したけれど、楽しみでもある。');
    }

    // 12歳：中学校入学（4月）
    if (a === 12) {
      s.occupation = '学生';
      recordMilestone('middle_entry', '中学校に入学した。少し大きめの新しい制服に袖を通し、門をくぐった。', '制服を着ると、急にお姉さんになった気分。これからどんな毎日になるのだろう。');
    }

    // 15歳：高校入学（4月）
    if (a === 15) {
      s.occupation = '学生';
      recordMilestone('high_entry', '高校に入学した。憧れの高校生活が始まり、新しい出会いに胸を高鳴らせた。', '少し大人に近づいた気がする。自分の好きなことを見つけたい。');
    }

    // 18歳：進学／就職／浪人（4月）
    if (a === 18 && s.occupation === '学生' && !s.flags.university && !s.flags.employed) {
      const know = s.abilities?.knowledge ?? s.knowledge ?? 0;
      const cash = s.money ?? 0;
      if (know >= 40 && cash >= -2 && !s.flags.prevent_university) {
        s.flags.university = true;
        s.flags.university_entry_age = 18;
        s.flags.university_entry_age_months = s.age_months;
        s.occupation = '学生';
        recordMilestone('university_entry', '大学に入学した。キャンパスに桜が舞い、自由で刺激的な学問と学生生活が始まった。', '知らないことばかりで刺激的。自分の世界が広がりそう。');
      } else if (know >= 32 && !s.flags.prevent_university && rng.next() < 0.65) {
        s.flags.ronin = true;
        s.occupation = '浪人生';
        recordMilestone('ronin_entry', '志望大学合格を目指し、浪人生活に入った。予備校に通いながら机に向かう日々が始まる。', '悔しさをバネに、もう一年頑張ることを決めた。来年の春こそは。');
      } else if ((s.social ?? 0) >= 25 || (s.independence ?? 0) >= 25) {
        s.flags.employed = true;
        s.occupation = '一般職';
        recordMilestone('firstjob_entry', '社会人として入社式を迎えた。スーツに身を包み、自立への第一歩を踏み出した。', '初めての仕事は緊張する。自分の力で暮らしていけるだろうか。');
      } else {
        s.occupation = '無職';
      }
    }

    // 19歳〜24歳：浪人・再受験・準備期間からの大学入学判定（4月）
    if (a >= 19 && a <= 24 && !s.flags.university && !s.flags.university_graduated) {
      const know = s.abilities?.knowledge ?? s.knowledge ?? 0;
      const cash = s.money ?? 0;
      if (s.flags.ronin || (know >= 40 && cash >= -3 && (s.occupation === '無職' || s.occupation === 'パート・アルバイト' || rng.next() < 0.35))) {
        const passChance = s.flags.ronin ? (know >= 38 ? 0.85 : 0.60) : 0.45;
        if (rng.next() < passChance) {
          s.flags.university = true;
          s.flags.university_entry_age = a;
          s.flags.university_entry_age_months = s.age_months;
          s.flags.ronin = false;
          s.occupation = '学生';
          const roninYears = a - 18;
          const roninText = roninYears === 1 ? '一浪を経て' : `${roninYears}年の浪人・準備期間を経て`;
          recordMilestone('university_entry_' + a, `${roninText}、大学に合格し入学した。努力が実を結び、満開の桜の下でキャンパスライフが始まった。`, '机に向かい続けた日々が報われた。苦労した分、大学での学びを大切にしたい。');
        } else if (s.flags.ronin && a >= 20) {
          s.flags.ronin = false;
          if ((s.social ?? 0) >= 20 || (s.independence ?? 0) >= 20) {
            s.flags.employed = true;
            s.occupation = '一般職';
            recordMilestone('ronin_giveup_job', '浪人生活に区切りをつけ、就職して社会人としての道を歩み始めた。', '思い描いた通りにはならなかったけれど、ここから新しい一歩を踏み出そう。');
          } else {
            s.occupation = 'パート・アルバイト';
          }
        }
      }
    }

    // 25歳〜64歳：社会人大学・リカレント教育・学び直しでの大学入学（4月）
    if (a >= 25 && a <= 64 && !s.flags.university && !s.flags.university_graduated && s.occupation !== '学生') {
      const know = s.abilities?.knowledge ?? s.knowledge ?? 0;
      const indep = s.states?.self_efficacy ?? s.independence ?? 0;
      if (know >= 50 && indep >= 15 && (s.flags.aspires_higher_education || rng.next() < 0.08)) {
        s.flags.university = true;
        s.flags.university_entry_age = a;
        s.flags.university_entry_age_months = s.age_months;
        s.flags.aspires_higher_education = false;
        s.flags.prev_occupation = s.occupation;
        s.occupation = '学生';
        recordMilestone('university_entry_adult_' + a, `${a}歳にして大学（社会人枠・夜間学部）に入学した。これまでの経験を深めるため、再び学問の門をくぐった。`, '大人になってからの学びは、学生時代とは全く違う新鮮さがある。仕事や生活の合間を縫って、学びを深めたい。');
      }
    }

    // 3月に大学卒業した直後の4月：新卒就職・現場復帰
    if (s.flags.just_graduated_uni) {
      s.flags.just_graduated_uni = false;
      const entryAge = s.flags.university_entry_age || 18;
      const isAdultStudent = entryAge >= 25;
      if (s.occupation === '学生') {
        if (s.flags.prev_occupation && isAdultStudent) {
          s.occupation = s.flags.prev_occupation;
          recordMilestone('graduate_returnjob', '大学での学びを携え、仕事の現場へと復帰した。', '得た知見をこれからの働き方に活かしていきたい。');
        } else {
          s.occupation = '一般職';
          s.flags.employed = true;
          recordMilestone('graduatejob', '学びを終え、本格的に社会人として働き始めた。', 'ここからは新しい生活。少しずつ自分の居場所を作りたい。');
        }
      }
    }
  }

  // === 月次判定：結婚後の第一子誕生（23〜41歳・異性配偶者との婚姻中） ===
  if (a >= 23 && a <= 41 && hasSpouse(s) && hasMalePartner(s) && !s.flags.hasChildren && !s.flags.childfree_chosen) {
    const annualBirthProb = s.flags.trying_for_baby ? 0.45 : 0.22;
    const monthlyBirthProb = 1 - Math.pow(1 - annualBirthProb, 1 / 12);
    if (rng.next() < monthlyBirthProb) {
      s.flags.hasChildren = true;
      s.flags.childBirthAge = a;
      const sp = getPrimaryPartner(s);
      const spName = sp ? sp.name + 'との間に' : '';
      recordMilestone('childbirth', `${spName}新しい命を授かり、元気な我が子を出産した。小さな手を握りしめ、母になった実感が胸に溢れた。`, '陣痛の苦しみを乗り越えて聞いた産声。この小さな命を大切に育てていきたい。');
    }
  }

  // === 誕生月：加齢に伴う身体・人生の節目 ===
  if (isBirthMonth) {
    if (a === 65) {
      recordMilestone('senior', '65歳を迎え、これからの暮らし方を考える節目になった。', '振り返れば長い道のりだった。まだやりたいことはある。');
      if (s.occupation === '一般職') {
        s.occupation = '無職';
        s.flags.employed = false;
      }
    }
    if (a === s.flags.menarcheAge) recordMilestone('menarche', '初経を迎え、身体の変化を実感した。', '驚いたし、少し戸惑った。自分の身体について、これから知っていきたい。');
    if (a === s.flags.menopauseAge) recordMilestone('menopause', '月経の終わりに向かう身体の変化を感じるようになった。', '身体の変化に戸惑う日もある。これまでの私も、これからの私も大切にしたい。');
  }
}
