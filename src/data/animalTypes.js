export const animalTypes = {
  dog: {
    id: 'dog', emoji: '🐶', name: '快乐修勾', kind: '热情直球型',
    keywords: ['真诚', '热烈', '感染力'], accent: '#FF7667', tint: '#FFE1DB',
    description: '喜欢你这件事，根本不用猜，因为你的快乐和爱意都会直接奔向对方。',
    match: '你的热情让关系一直有明亮的温度。',
    coreCharm: '纯粹热烈',
    advantages: ['主动表达', '情绪感染力强', '会让另一半感受到被喜欢'],
    reminder: '有时候太想确认对方的爱，也可以给彼此一点呼吸空间。',
    easyToFallFor: { id: 'bear', name: '靠山大熊', reason: '你的热烈，需要一个稳定回应。' },
    shareQuote: '我是快乐修勾，喜欢你就藏不住。'
  },
  cat: {
    id: 'cat', emoji: '🐱', name: '傲娇小猫', kind: '神秘拉扯型',
    keywords: ['独立', '慢热', '边界感'], accent: '#8272D6', tint: '#EAE4FF',
    description: '你不是不在乎，只是不轻易把真心交出去。',
    match: '你保留一点神秘，也保留了让人靠近的理由。',
    coreCharm: '若即若离的吸引力',
    advantages: ['有自己的边界', '不会盲目投入', '越了解越让人着迷'],
    reminder: '偶尔直接表达，比让对方猜更容易被爱。',
    easyToFallFor: { id: 'fox', name: '氛围狐狸', reason: '一个保持神秘，一个创造心动。' },
    shareQuote: '我是傲娇小猫，嘴硬但心软。'
  },
  fox: {
    id: 'fox', emoji: '🦊', name: '氛围狐狸', kind: '浪漫制造型',
    keywords: ['浪漫', '新鲜感', '情绪价值'], accent: '#F39755', tint: '#FFE6D1',
    description: '你相信爱情需要一点魔法，所以总想让平凡日子变特别。',
    match: '有你在的恋爱，连日常都带着一点心动滤镜。',
    coreCharm: '制造心动',
    advantages: ['会制造惊喜', '懂得提供情绪价值', '擅长保持新鲜感'],
    reminder: '浪漫之外，也要记得稳定陪伴。',
    easyToFallFor: { id: 'dog', name: '快乐修勾', reason: '两个快乐制造机会遇见快乐。' },
    shareQuote: '我是氛围狐狸，负责让爱情发光。'
  },
  eagle: {
    id: 'eagle', emoji: '🦅', name: '清醒雄鹰', kind: '灵魂契合型',
    keywords: ['理性', '成长', '精神同频'], accent: '#5F83BE', tint: '#DCEBFF',
    description: '比起短暂心动，你更想找到一个能一起看向未来的人。',
    match: '你相信最好的爱，是彼此照亮又各自成长。',
    coreCharm: '精神同频',
    advantages: ['重视价值观', '善于深度沟通', '追求长期成长'],
    reminder: '不要只分析爱情，也要感受爱情。',
    easyToFallFor: { id: 'wolf', name: '独立狼崽', reason: '两个清醒的人，更容易互相理解。' },
    shareQuote: '我是清醒雄鹰，我寻找的是灵魂同频。'
  },
  lion: {
    id: 'lion', emoji: '🦁', name: '守护雄狮', kind: '责任担当型',
    keywords: ['保护', '主动', '可靠'], accent: '#D88D36', tint: '#FFE8B8',
    description: '当你认定一个人，你会想成为TA最可靠的后盾。',
    match: '你的偏爱有行动感，让人忍不住安心依赖。',
    coreCharm: '保护欲',
    advantages: ['行动力强', '遇事愿意承担', '给人强烈安全感'],
    reminder: '爱一个人不是承担全部，也要允许对方成长。',
    easyToFallFor: { id: 'rabbit', name: '软萌小兔', reason: '一个给予保护，一个表达信任。' },
    shareQuote: '我是守护雄狮，爱就是站在你身边。'
  },
  rabbit: {
    id: 'rabbit', emoji: '🐰', name: '软萌小兔', kind: '敏感共情型',
    keywords: ['温柔', '细腻', '感知力'], accent: '#E484A1', tint: '#FFE1EA',
    description: '你的特别之处，是总能发现别人没有注意到的小情绪。',
    match: '细腻是你的超能力，能让爱被好好看见。',
    coreCharm: '温柔感知',
    advantages: ['共情能力强', '温柔细腻', '很会照顾感受'],
    reminder: '别只关注别人，也记得照顾自己的情绪。',
    easyToFallFor: { id: 'bear', name: '靠山大熊', reason: '你的敏感，需要被温柔接住。' },
    shareQuote: '我是软萌小兔，能感受到你的小情绪。'
  },
  bear: {
    id: 'bear', emoji: '🐻', name: '靠山大熊', kind: '稳定陪伴型',
    keywords: ['安全感', '包容', '可靠'], accent: '#A8795E', tint: '#F4E2D7',
    description: '和你恋爱的人，会知道什么叫“有人一直在”。',
    match: '和你相处像回到一个稳定、温暖的安全区。',
    coreCharm: '安心感',
    advantages: ['包容耐心', '情绪稳定', '擅长长期陪伴'],
    reminder: '不要只做付出者，也要表达自己的需要。',
    easyToFallFor: { id: 'dog', name: '快乐修勾', reason: '稳定回应热烈。' },
    shareQuote: '我是靠山大熊，累了可以靠过来。'
  },
  turtle: {
    id: 'turtle', emoji: '🐢', name: '慢热乌龟', kind: '长情专一型',
    keywords: ['谨慎', '稳定', '慢投入'], accent: '#69A77B', tint: '#DDF3DF',
    description: '你不会轻易开始一段关系，但决定靠近后，会认真走很久。',
    match: '你的慢不是退后，是把真心放在恰好的节奏里。',
    coreCharm: '认真专一',
    advantages: ['忠诚稳定', '不容易冲动', '重视长期关系'],
    reminder: '不要因为害怕受伤，错过表达喜欢的机会。',
    easyToFallFor: { id: 'eagle', name: '清醒雄鹰', reason: '两个认真对待关系的人。' },
    shareQuote: '我是慢热乌龟，慢一点，但很认真。'
  },
  wolf: {
    id: 'wolf', emoji: '🐺', name: '独立狼崽', kind: '自我成长型',
    keywords: ['自由', '目标', '独立'], accent: '#617490', tint: '#E1E8F0',
    description: '我爱你，但我不会丢掉自己。',
    match: '你擅长带着完整的自己，遇见同样闪耀的人。',
    coreCharm: '完整自我',
    advantages: ['独立成熟', '有自己的目标', '不依赖关系定义自己'],
    reminder: '偶尔让别人靠近，也是信任。',
    easyToFallFor: { id: 'cat', name: '傲娇小猫', reason: '两个有边界的人互相尊重。' },
    shareQuote: '我是独立狼崽，爱你也爱自己。'
  },
  capybara: {
    id: 'capybara', emoji: '🐼', name: '佛系水豚', kind: '松弛治愈型',
    keywords: ['平和', '不内耗', '舒服'], accent: '#B88D70', tint: '#F3E5D8',
    description: '你不追求轰轰烈烈，只想和喜欢的人舒服地待在一起。',
    match: '你的松弛感，是让两个人越爱越轻盈的魔法。',
    coreCharm: '稳定快乐',
    advantages: ['情绪稳定', '不喜欢内耗', '相处轻松'],
    reminder: '偶尔制造一点惊喜，会让关系更有温度。',
    easyToFallFor: { id: 'bear', name: '靠山大熊', reason: '舒服的人遇见舒服的人。' },
    shareQuote: '我是佛系水豚，舒服就是最高级浪漫。'
  },
  hamster: {
    id: 'hamster', emoji: '🐹', name: '宝藏仓鼠', kind: '细节浪漫型',
    keywords: ['记忆', '行动', '照顾'], accent: '#DF9D4C', tint: '#FFF0D1',
    description: '你可能不会说很多甜言蜜语，但你记得关于TA的一切。',
    match: '你把爱意收集在细节里，某天会变成满满的惊喜。',
    coreCharm: '偷偷爱你',
    advantages: ['观察细致', '用行动表达', '擅长小惊喜'],
    reminder: '不要只默默付出，也要让对方知道你的爱。',
    easyToFallFor: { id: 'dog', name: '快乐修勾', reason: '一个表达，一个记录。' },
    shareQuote: '我是宝藏仓鼠，爱藏在每个小细节里。'
  },
  owl: {
    id: 'owl', emoji: '🦉', name: '读心猫头鹰', kind: '洞察理解型',
    keywords: ['观察', '共情', '理解'], accent: '#7560A9', tint: '#E9E0FA',
    description: '你总能发现别人没有说出口的话。',
    match: '被你理解是一种温柔而罕见的幸福。',
    coreCharm: '看懂情绪',
    advantages: ['洞察力强', '善于理解别人', '很会观察关系变化'],
    reminder: '不要猜测太多，有时候直接沟通更简单。',
    easyToFallFor: { id: 'eagle', name: '清醒雄鹰', reason: '一个看懂情绪，一个理解思想。' },
    shareQuote: '我是读心猫头鹰，我听懂你的沉默。'
  }
}

export const animalList = Object.values(animalTypes)
