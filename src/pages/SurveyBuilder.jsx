import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '../components/ui/badget';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Plus,
  Trash2,
  Edit3,
  Eye,
  Save,
  ArrowLeft,
  Type,
  CheckSquare,
  Circle,
  Star,
  BarChart3
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SurveyBuilder = () => {
  const { toast } = useToast();

  const [survey, setSurvey] = useState({
    id: 'new-survey',
    title: 'استطلاع جديد',
    description: 'وصف الاستطلاع',
    questions: []
  });

  const [editingQuestion, setEditingQuestion] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  const questionTypes = [
    { type: 'text', label: 'نص قصير', icon: Type },
    { type: 'long-text', label: 'نص طويل', icon: Edit3 },
    { type: 'single-choice', label: 'اختيار واحد', icon: Circle },
    { type: 'multiple-choice', label: 'اختيار متعدد', icon: CheckSquare },
    { type: 'rating', label: 'تقييم', icon: Star }
  ];

  const handleSaveSurvey = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("https://your-api-endpoint.com/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(survey)
      });

      const data = await res.json();
      if (!res.ok || !data._id) throw new Error(data.message || "فشل الحفظ");

      const linkRes = await fetch(`https://your-api-endpoint.com/survey/${data._id}/link`);
      const linkData = await linkRes.json();

      toast({
        title: "تم حفظ الاستطلاع ✅",
        description: `رابط المشاركة: ${linkData.link || "غير متاح حالياً"}`,
        style: { backgroundColor: '#490F8F', color: 'white' }
      });

    } catch (err) {
      toast({
        title: "خطأ في الحفظ",
        description: err.message || "حدث خطأ أثناء الحفظ",
        variant: "destructive"
      });
    }
  };

  const addQuestion = (type) => {
    const newQuestion = {
      id: Date.now().toString(),
      type,
      title: 'سؤال جديد',
      description: '',
      options: type === 'single-choice' || type === 'multiple-choice' ? ['خيار 1', 'خيار 2'] : undefined,
      required: false
    };

    setSurvey(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }));
    setEditingQuestion(newQuestion.id);
  };

  const updateQuestion = (questionId, updates) => {
    setSurvey(prev => ({
      ...prev,
      questions: prev.questions.map(q => q.id === questionId ? { ...q, ...updates } : q)
    }));
  };

  const deleteQuestion = (questionId) => {
    setSurvey(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== questionId)
    }));
  };

  const addOption = (questionId) => {
    const question = survey.questions.find(q => q.id === questionId);
    if (question && question.options) {
      updateQuestion(questionId, {
        options: [...question.options, `خيار ${question.options.length + 1}`]
      });
    }
  };

  const updateOption = (questionId, optionIndex, value) => {
    const question = survey.questions.find(q => q.id === questionId);
    if (question && question.options) {
      const newOptions = [...question.options];
      newOptions[optionIndex] = value;
      updateQuestion(questionId, { options: newOptions });
    }
  };

  const removeOption = (questionId, optionIndex) => {
    const question = survey.questions.find(q => q.id === questionId);
    if (question && question.options && question.options.length > 2) {
      const newOptions = question.options.filter((_, index) => index !== optionIndex);
      updateQuestion(questionId, { options: newOptions });
    }
  };

  const renderQuestionEditor = (question) => (
    <Card key={question.id} className="mb-4 border-l-4 border-l-[#490F8F]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" style={{ backgroundColor: '#490F8F' }}>
            {questionTypes.find(t => t.type === question.type)?.label}
          </Badge>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => setEditingQuestion(editingQuestion === question.id ? null : question.id)}>
              <Edit3 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => deleteQuestion(question.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {editingQuestion === question.id ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor={`title-${question.id}`}>عنوان السؤال</Label>
              <Input
                id={`title-${question.id}`}
                value={question.title}
                onChange={(e) => updateQuestion(question.id, { title: e.target.value })}
                placeholder="اكتب سؤالك هنا"
                style={{ borderColor: '#490F8F' }}
              />
            </div>
            <div>
              <Label htmlFor={`desc-${question.id}`}>وصف السؤال (اختياري)</Label>
              <Textarea
                id={`desc-${question.id}`}
                value={question.description || ''}
                onChange={(e) => updateQuestion(question.id, { description: e.target.value })}
                placeholder="وصف إضافي للسؤال"
                style={{ borderColor: '#490F8F' }}
              />
            </div>
            {(question.type === 'single-choice' || question.type === 'multiple-choice') && (
              <div>
                <Label>الخيارات</Label>
                <div className="space-y-2 mt-2">
                  {question.options?.map((option, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <Input
                        value={option}
                        onChange={(e) => updateOption(question.id, index, e.target.value)}
                        placeholder={`خيار ${index + 1}`}
                        style={{ borderColor: '#490F8F' }}
                      />
                      {question.options && question.options.length > 2 && (
                        <Button variant="ghost" size="sm" onClick={() => removeOption(question.id, index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => addOption(question.id)} style={{ borderColor: '#490F8F', color: '#490F8F' }}>
                    <Plus className="h-4 w-4 mr-2" />
                    إضافة خيار
                  </Button>
                </div>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`required-${question.id}`}
                checked={question.required}
                onCheckedChange={(checked) => updateQuestion(question.id, { required: checked })}
                style={{ borderColor: '#490F8F' }}
              />
              <Label htmlFor={`required-${question.id}`}>سؤال إجباري</Label>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-medium text-lg mb-2" style={{ color: '#490F8F' }}>{question.title}</h3>
            {question.description && <p className="text-muted-foreground mb-3">{question.description}</p>}
            {question.type === 'text' && <Input placeholder="إجابة نصية قصيرة" disabled style={{ borderColor: '#490F8F' }} />}
            {question.type === 'long-text' && <Textarea placeholder="إجابة نصية طويلة" disabled style={{ borderColor: '#490F8F' }} />}
            {question.type === 'single-choice' && question.options && (
              <RadioGroup>
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${question.id}-${index}`} disabled style={{ borderColor: '#490F8F' }} />
                    <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
            {question.type === 'multiple-choice' && question.options && (
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`${question.id}-${index}`} disabled style={{ borderColor: '#490F8F' }} />
                    <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
                  </div>
                ))}
              </div>
            )}
            {question.type === 'rating' && (
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(rating => (
                  <Button key={rating} variant="outline" size="sm" disabled style={{ borderColor: '#490F8F', color: '#490F8F' }}>
                    <Star className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            )}
            {question.required && <Badge variant="destructive" className="mt-2">إجباري</Badge>}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (previewMode) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" onClick={() => setPreviewMode(false)} style={{ color: '#490F8F' }}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              العودة للتحرير
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#490F8F' }}>{survey.title}</CardTitle>
              <p className="text-muted-foreground">{survey.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {survey.questions.map(question => renderQuestionEditor(question))}
              <Button className="w-full" style={{ backgroundColor: '#490F8F' }}>إرسال الإجابات</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => window.history.back()} style={{ color: '#490F8F' }}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                الرجوع
              </Button>
              <div>
                <h1 className="text-xl font-semibold" style={{ color: '#490F8F' }}>منشئ الاستطلاعات</h1>
                <p className="text-sm text-muted-foreground">إنشاء وتحرير الاستطلاعات</p>
              </div>
            </div>        
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle style={{ color: '#490F8F' }}>معلومات الاستطلاع</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="survey-title">عنوان الاستطلاع</Label>
                  <Input
                    id="survey-title"
                    value={survey.title}
                    onChange={(e) => setSurvey(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="اكتب عنوان الاستطلاع"
                    style={{ borderColor: '#490F8F' }}
                  />
                </div>
                <div>
                  <Label htmlFor="survey-description">وصف الاستطلاع</Label>
                  <Textarea
                    id="survey-description"
                    value={survey.description}
                    onChange={(e) => setSurvey(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="اكتب وصف الاستطلاع"
                    style={{ borderColor: '#490F8F' }}
                  />
                </div>
              </CardContent>
            </Card>

        <div className="space-y-4">
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-semibold" style={{ color: '#490F8F' }}>الأسئلة ({survey.questions.length})</h2>
  </div>
  {survey.questions.length === 0 ? (
    <Card>
      <CardContent className="text-center py-12">
        <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2" style={{ color: '#490F8F' }}>لا توجد أسئلة بعد</h3>
        <p className="text-muted-foreground mb-4">ابدأ بإضافة سؤال من القائمة الجانبية</p>
      </CardContent>
    </Card>
  ) : (
    survey.questions.map(question => renderQuestionEditor(question))
  )}
</div>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg" style={{ color: '#490F8F' }}>إضافة سؤال</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {questionTypes.map(type => {
                    const Icon = type.icon;
                    return (
                      <Button
                        key={type.type}
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => addQuestion(type.type)}
                        style={{ borderColor: '#490F8F', color: '#490F8F' }}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {type.label}
                      </Button>
                    );
                  })}
                </div>
                <Separator className="my-4" />
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">إحصائيات الاستطلاع:</p>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>الأسئلة:</span>
                      <span>{survey.questions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الإجبارية:</span>
                      <span>{survey.questions.filter(q => q.required).length}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" onClick={() => setPreviewMode(true)} style={{ borderColor: '#490F8F', color: '#490F8F' }}>
                <Eye className="h-4 w-4 mr-2" />
                معاينة
              </Button>
              <Button onClick={handleSaveSurvey} style={{ backgroundColor: '#490F8F' }}>
                <Save className="h-4 w-4 mr-2" />
                حفظ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyBuilder;