"use client"

import { useState } from "react"
import { Activity, Apple, Dumbbell, TrendingDown, Target, Flame, Droplet, Moon, Calendar, ChevronRight, Play, Check, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function FitApp() {
  const [weight, setWeight] = useState(78)
  const [goalWeight] = useState(70)
  const [caloriesConsumed, setCaloriesConsumed] = useState(1450)
  const [caloriesGoal] = useState(1800)
  const [waterIntake, setWaterIntake] = useState(6)
  const [waterGoal] = useState(8)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const weightProgress = ((weight - goalWeight) / (78 - goalWeight)) * 100
  const caloriesProgress = (caloriesConsumed / caloriesGoal) * 100
  const waterProgress = (waterIntake / waterGoal) * 100

  const plans = [
    {
      id: "basic",
      name: "Plano Básico",
      price: "R$ 49,90",
      period: "/mês",
      description: "Ideal para começar sua jornada",
      icon: Apple,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Plano alimentar personalizado",
        "15 receitas saudáveis",
        "Contador de calorias",
        "Suporte por email",
        "Acesso ao app mobile"
      ]
    },
    {
      id: "premium",
      name: "Plano Premium",
      price: "R$ 89,90",
      period: "/mês",
      description: "Mais popular - Resultados rápidos",
      icon: Flame,
      color: "from-orange-500 to-pink-600",
      popular: true,
      features: [
        "Tudo do Plano Básico",
        "Treinos personalizados HIIT",
        "50+ receitas exclusivas",
        "Acompanhamento semanal",
        "Suporte prioritário 24/7",
        "Grupo VIP no WhatsApp"
      ]
    },
    {
      id: "elite",
      name: "Plano Elite",
      price: "R$ 149,90",
      period: "/mês",
      description: "Transformação completa garantida",
      icon: Crown,
      color: "from-purple-500 to-pink-600",
      features: [
        "Tudo do Plano Premium",
        "Nutricionista dedicado",
        "Personal trainer online",
        "Plano 100% personalizado",
        "Videochamadas semanais",
        "Ajustes ilimitados no plano",
        "Garantia de resultados em 60 dias"
      ]
    }
  ]

  const mealPlans = [
    {
      name: "Café da Manhã Power",
      calories: 350,
      protein: "25g",
      items: ["2 ovos mexidos", "Aveia com frutas", "Café preto"],
      time: "7:00 - 8:00"
    },
    {
      name: "Almoço Fit",
      calories: 550,
      protein: "40g",
      items: ["Peito de frango grelhado", "Arroz integral", "Salada verde", "Legumes"],
      time: "12:00 - 13:00"
    },
    {
      name: "Lanche da Tarde",
      calories: 200,
      protein: "15g",
      items: ["Iogurte grego", "Castanhas", "Frutas vermelhas"],
      time: "16:00 - 17:00"
    },
    {
      name: "Jantar Leve",
      calories: 450,
      protein: "35g",
      items: ["Salmão grelhado", "Batata doce", "Brócolis no vapor"],
      time: "19:00 - 20:00"
    }
  ]

  const workouts = [
    {
      name: "HIIT Queima Gordura",
      duration: "20 min",
      calories: "300 kcal",
      level: "Intenso",
      exercises: ["Burpees", "Mountain Climbers", "Jump Squats", "High Knees"]
    },
    {
      name: "Treino de Força",
      duration: "45 min",
      calories: "400 kcal",
      level: "Moderado",
      exercises: ["Agachamento", "Flexões", "Prancha", "Lunges"]
    },
    {
      name: "Cardio Definição",
      duration: "30 min",
      calories: "350 kcal",
      level: "Moderado",
      exercises: ["Corrida", "Pular corda", "Bike", "Escada"]
    },
    {
      name: "Core & Abs",
      duration: "25 min",
      calories: "200 kcal",
      level: "Intenso",
      exercises: ["Abdominais", "Prancha lateral", "Russian twists", "Leg raises"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-orange-900/20">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-2 rounded-xl">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  FitBody Pro
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Seu corpo dos sonhos</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
              <Calendar className="w-4 h-4 mr-2" />
              Dia 15
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-orange-200 dark:border-orange-900/50 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/30 dark:to-gray-900">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Peso Atual</CardTitle>
                <TrendingDown className="w-4 h-4 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{weight} kg</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Meta: {goalWeight} kg</p>
              <Progress value={100 - weightProgress} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="border-2 border-pink-200 dark:border-pink-900/50 bg-gradient-to-br from-pink-50 to-white dark:from-pink-950/30 dark:to-gray-900">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Calorias Hoje</CardTitle>
                <Flame className="w-4 h-4 text-pink-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-pink-600">{caloriesConsumed}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">de {caloriesGoal} kcal</p>
              <Progress value={caloriesProgress} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 dark:border-blue-900/50 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Hidratação</CardTitle>
                <Droplet className="w-4 h-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{waterIntake}/{waterGoal}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">copos de água</p>
              <Progress value={waterProgress} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 dark:border-purple-900/50 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Sono</CardTitle>
                <Moon className="w-4 h-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">7.5h</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Meta: 8h</p>
              <Progress value={93.75} className="mt-3 h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="plans" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[500px] bg-white dark:bg-gray-800 p-1">
            <TabsTrigger value="plans" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Crown className="w-4 h-4 mr-2" />
              Planos
            </TabsTrigger>
            <TabsTrigger value="meals" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Apple className="w-4 h-4 mr-2" />
              Alimentação
            </TabsTrigger>
            <TabsTrigger value="workouts" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Dumbbell className="w-4 h-4 mr-2" />
              Treinos
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Activity className="w-4 h-4 mr-2" />
              Progresso
            </TabsTrigger>
          </TabsList>

          {/* Plans Tab */}
          <TabsContent value="plans" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Escolha Seu Plano
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Invista no seu corpo e alcance resultados incríveis em tempo recorde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const Icon = plan.icon
                return (
                  <Card 
                    key={plan.id}
                    className={`relative border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
                      plan.popular 
                        ? 'border-orange-400 dark:border-orange-600 shadow-lg' 
                        : 'border-gray-200 dark:border-gray-700'
                    } ${
                      selectedPlan === plan.id 
                        ? 'ring-4 ring-orange-500 ring-opacity-50' 
                        : ''
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1 text-sm font-bold">
                          MAIS POPULAR
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-r ${plan.color} w-fit`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-sm mt-2">
                        {plan.description}
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-lg">
                          {plan.period}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-r ${plan.color}`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        className={`w-full mt-6 font-bold text-white ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700' 
                            : 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600'
                        }`}
                        size="lg"
                      >
                        {selectedPlan === plan.id ? 'Plano Selecionado' : 'Escolher Plano'}
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Guarantee Section */}
            <Card className="border-2 border-green-200 dark:border-green-900/50 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="bg-green-500 p-6 rounded-full">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Garantia de 30 Dias
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      Se você não ver resultados em 30 dias, devolvemos 100% do seu dinheiro. 
                      Sem perguntas, sem complicações. Seu sucesso é nossa prioridade!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    "Perdi 8kg em 45 dias! O plano Premium mudou minha vida completamente."
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    - Maria Silva, 32 anos
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    "Finalmente consegui definir o abdômen! Os treinos HIIT são incríveis."
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    - João Santos, 28 anos
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    "O acompanhamento personalizado fez toda a diferença. Recomendo!"
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    - Ana Costa, 35 anos
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Meals Tab */}
          <TabsContent value="meals" className="space-y-4">
            <Card className="border-2 border-orange-200 dark:border-orange-900/50">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Plano Alimentar Diário
                </CardTitle>
                <CardDescription>
                  Refeições balanceadas para acelerar seu metabolismo e definir o corpo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mealPlans.map((meal, index) => (
                  <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{meal.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{meal.time}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-orange-600">{meal.calories} kcal</div>
                          <div className="text-sm text-pink-600">{meal.protein} proteína</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {meal.items.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 dark:border-green-900/50 bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-950/50 p-3 rounded-xl">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Dica do Dia</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Beba água antes das refeições para aumentar a saciedade e acelerar o metabolismo em até 30%!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workouts Tab */}
          <TabsContent value="workouts" className="space-y-4">
            <Card className="border-2 border-pink-200 dark:border-pink-900/50">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Treinos para Definição
                </CardTitle>
                <CardDescription>
                  Exercícios intensos para queimar gordura e definir músculos rapidamente
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workouts.map((workout, index) => (
                  <Card key={index} className="border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-1">{workout.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            workout.level === "Intenso" 
                              ? "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300" 
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300"
                          }`}>
                            {workout.level}
                          </span>
                        </div>
                        <Button size="icon" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Activity className="w-4 h-4" />
                          {workout.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="w-4 h-4" />
                          {workout.calories}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Exercícios:</p>
                        <div className="flex flex-wrap gap-2">
                          {workout.exercises.map((exercise, i) => (
                            <span key={i} className="px-2 py-1 bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 rounded text-xs">
                              {exercise}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-900/50 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 dark:bg-purple-950/50 p-3 rounded-xl">
                    <Dumbbell className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Dica de Treino</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Combine HIIT com treino de força 3-4x por semana para resultados visíveis em 30 dias!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="border-2 border-orange-200 dark:border-orange-900/50">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Evolução de Peso
                  </CardTitle>
                  <CardDescription>Últimos 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/30 dark:to-pink-950/30 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Peso Inicial</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">85 kg</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Peso Atual</p>
                        <p className="text-2xl font-bold text-orange-600">{weight} kg</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Meta</p>
                        <p className="text-2xl font-bold text-green-600">{goalWeight} kg</p>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-900/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progresso Total</span>
                        <span className="text-lg font-bold text-green-600">-7 kg</span>
                      </div>
                      <Progress value={87.5} className="h-3" />
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Faltam apenas 8 kg para sua meta!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 dark:border-pink-900/50">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Conquistas
                  </CardTitle>
                  <CardDescription>Marcos alcançados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-lg border border-yellow-200 dark:border-yellow-900/50">
                    <div className="bg-yellow-400 p-2 rounded-full">
                      <Flame className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">15 dias consecutivos</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Mantendo a rotina!</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-900/50">
                    <div className="bg-green-500 p-2 rounded-full">
                      <TrendingDown className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">7 kg perdidos</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Resultado incrível!</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border border-blue-200 dark:border-blue-900/50">
                    <div className="bg-blue-500 p-2 rounded-full">
                      <Dumbbell className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">30 treinos completos</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Você é imparável!</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-900/50">
                    <div className="bg-purple-500 p-2 rounded-full">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100">Meta calórica diária</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">15 dias seguidos!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-gradient-to-r from-orange-200 to-pink-200 dark:from-orange-900/50 dark:to-pink-900/50 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/30 dark:via-pink-950/30 dark:to-purple-950/30">
              <CardContent className="p-8 text-center">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 p-4 rounded-full mb-4">
                  <Activity className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Você está no caminho certo!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Continue assim e você alcançará seu corpo dos sonhos em menos de 2 meses!
                </p>
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold px-8">
                  Continuar Jornada
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
