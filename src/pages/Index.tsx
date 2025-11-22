import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const categories = [
    {
      id: 'kitchens',
      title: 'Кухни',
      description: 'Элегантные кухни премиум-класса с итальянской фурнитурой',
      icon: 'UtensilsCrossed',
    },
    {
      id: 'wardrobes',
      title: 'Шкафы распашные',
      description: 'Классические распашные шкафы из натурального дерева',
      icon: 'DoorOpen',
    },
    {
      id: 'sliding',
      title: 'Шкафы-купе',
      description: 'Современные системы хранения с раздвижными дверями',
      icon: 'PanelLeftClose',
    },
  ];

  const portfolio = [
    {
      id: 1,
      category: 'kitchens',
      title: 'Кухня в стиле модерн',
      description: 'Проект для квартиры 120м²',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
    },
    {
      id: 2,
      category: 'wardrobes',
      title: 'Гардеробная система',
      description: 'Распашные шкафы в классическом стиле',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    },
    {
      id: 3,
      category: 'sliding',
      title: 'Шкаф-купе с зеркалами',
      description: 'Встроенная система для спальни',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
    },
    {
      id: 4,
      category: 'kitchens',
      title: 'Кухня в минимализме',
      description: 'Белый глянец и золотые акценты',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
    },
    {
      id: 5,
      category: 'wardrobes',
      title: 'Шкафы в гостиную',
      description: 'Распашная мебель из массива дуба',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
    },
    {
      id: 6,
      category: 'sliding',
      title: 'Угловой шкаф-купе',
      description: 'Оптимальное использование пространства',
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800',
    },
  ];

  const [filterCategory, setFilterCategory] = useState('all');

  const filteredPortfolio = filterCategory === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === filterCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold text-primary">
            ЭЛИТ<span className="text-secondary">МЕБЕЛЬ</span>
          </div>
          <div className="hidden md:flex gap-8">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'catalog', label: 'Каталог' },
              { id: 'portfolio', label: 'Портфолио' },
              { id: 'about', label: 'О нас' },
              { id: 'contact', label: 'Контакты' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  activeSection === item.id ? 'text-secondary' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-primary">
            Заказать звонок
          </Button>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary leading-tight">
                Корпусная мебель<br />
                <span className="text-secondary">премиум-класса</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Создаём эксклюзивные кухни и шкафы по индивидуальным проектам. 
                Итальянская фурнитура, натуральные материалы, безупречное качество.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на замер
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('portfolio')}>
                  Смотреть проекты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200" 
                  alt="Премиум кухня"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-heading font-bold">Гарантия 10 лет</div>
                <div className="text-sm">на всю продукцию</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Наш каталог
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Изготавливаем мебель любой сложности под ваши размеры и пожелания
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={category.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-secondary overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <Icon name={category.icon as any} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <Button variant="ghost" className="group-hover:text-secondary p-0">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Портфолио проектов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Более 500 реализованных проектов премиум-класса
            </p>
            <Tabs defaultValue="all" className="w-full max-w-md mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all" onClick={() => setFilterCategory('all')}>
                  Все
                </TabsTrigger>
                <TabsTrigger value="kitchens" onClick={() => setFilterCategory('kitchens')}>
                  Кухни
                </TabsTrigger>
                <TabsTrigger value="wardrobes" onClick={() => setFilterCategory('wardrobes')}>
                  Распашные
                </TabsTrigger>
                <TabsTrigger value="sliding" onClick={() => setFilterCategory('sliding')}>
                  Купе
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                О компании
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Мы специализируемся на создании элитной корпусной мебели с 2009 года. 
                За это время реализовали более 500 проектов для квартир, загородных домов и коммерческих объектов.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                Работаем только с премиальными материалами и фурнитурой ведущих европейских производителей. 
                Каждый проект — это индивидуальный подход и внимание к деталям.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="Award" size={24} className="text-secondary mt-1" />
                  <div>
                    <div className="font-heading font-bold text-xl">Гарантия 10 лет</div>
                    <div className="text-sm text-white/80">На всю продукцию</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Truck" size={24} className="text-secondary mt-1" />
                  <div>
                    <div className="font-heading font-bold text-xl">Доставка</div>
                    <div className="text-sm text-white/80">И установка бесплатно</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Ruler" size={24} className="text-secondary mt-1" />
                  <div>
                    <div className="font-heading font-bold text-xl">Замер</div>
                    <div className="text-sm text-white/80">Бесплатный выезд</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Palette" size={24} className="text-secondary mt-1" />
                  <div>
                    <div className="font-heading font-bold text-xl">Дизайн-проект</div>
                    <div className="text-sm text-white/80">3D визуализация</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                alt="Наша команда"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card className="p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Что вас интересует?</label>
                <Textarea placeholder="Расскажите о своём проекте..." rows={4} />
              </div>
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-primary">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-secondary" />
              </div>
              <div className="font-heading font-bold text-lg mb-2">Телефон</div>
              <div className="text-muted-foreground">+7 (495) 123-45-67</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-secondary" />
              </div>
              <div className="font-heading font-bold text-lg mb-2">Email</div>
              <div className="text-muted-foreground">info@elitmebel.ru</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-secondary" />
              </div>
              <div className="font-heading font-bold text-lg mb-2">Адрес</div>
              <div className="text-muted-foreground">Москва, ул. Примерная, 1</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-heading font-bold mb-4">
                ЭЛИТ<span className="text-secondary">МЕБЕЛЬ</span>
              </div>
              <p className="text-white/80 text-sm">
                Премиальная корпусная мебель с 2009 года
              </p>
            </div>
            <div>
              <div className="font-heading font-bold text-lg mb-4">Каталог</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-secondary transition-colors">Кухни</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Шкафы распашные</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Шкафы-купе</a></li>
              </ul>
            </div>
            <div>
              <div className="font-heading font-bold text-lg mb-4">Компания</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-secondary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <div className="font-heading font-bold text-lg mb-4">Контакты</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@elitmebel.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 ЭлитМебель. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
