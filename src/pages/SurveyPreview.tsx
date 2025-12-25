import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { Survey } from "./SurveyBuilder";
import { useToast } from "@/hooks/use-toast";

interface SurveyPreviewProps {
  survey: Survey;
}

const SurveyPreview = ({ survey }: SurveyPreviewProps) => {
  const { toast } = useToast();
  const [responses, setResponses] = useState<Record<string, any>>({});

  const handleResponse = (questionId: string, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleTextResponse = (questionId: string, value: string) => {
    const words = value.trim().split(/\s+/).filter(word => word.length > 0);
    
    // If trying to exceed 200 words, prevent the change and show warning
    if (words.length > 200) {
      toast({
        title: "تحذير",
        description: "تم الوصول للحد الأقصى 200 كلمة",
        variant: "destructive"
      });
      return;
    }
    
    handleResponse(questionId, value);
  };

  const getWordCount = (questionId: string) => {
    const text = responses[questionId] || "";
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const handleSubmit = () => {
    // Here you would send responses to your API
    console.log("Survey responses:", responses);
  };

  if (survey.questions.length === 0) {
    return (
      <Card className="p-8 text-center bg-white/50 backdrop-blur-sm">
        <p className="text-gray-500 text-lg">لا توجد أسئلة لمعاينتها</p>
        <p className="text-gray-400 text-sm mt-2">أضف أسئلة في تبويب "إنشاء الاستطلاع" لمعاينة الاستطلاع</p>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto" dir="rtl">
      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        {/* Survey Header */}
        <div className="text-center mb-8">
          {survey.logo && (
            <img
              src={survey.logo}
              alt="Survey Logo"
              className="w-20 h-20 object-cover rounded-lg mx-auto mb-4"
            />
          )}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{survey.title}</h1>
          <p className="text-gray-600">{survey.description}</p>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {survey.questions.map((question, index) => (
            <div key={question.id} className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 mb-3">
                    {question.text}
                    {question.required && <span className="text-red-500 mr-1">*</span>}
                  </h3>

                  {/* Multiple Choice */}
                  {question.type === 'multiple-choice' && question.options && (
                    <RadioGroup
                      value={responses[question.id] || ""}
                      onValueChange={(value) => handleResponse(question.id, value)}
                      className="space-y-2"
                    >
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value={option} id={`${question.id}-${optionIndex}`} />
                          <Label htmlFor={`${question.id}-${optionIndex}`} className="cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}

                  {/* Text Input with Word Limit */}
                  {question.type === 'text' && (
                    <div className="space-y-2">
                      <Textarea
                        value={responses[question.id] || ""}
                        onChange={(e) => handleTextResponse(question.id, e.target.value)}
                        placeholder="اكتب إجابتك هنا..."
                        className="text-right min-h-[100px]"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>الحد الأقصى 200 كلمة</span>
                        <span className={getWordCount(question.id) > 200 ? 'text-red-500' : ''}>
                          {getWordCount(question.id)}/200 كلمة
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Rating */}
                  {question.type === 'rating' && (
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => handleResponse(question.id, rating)}
                          className="transition-colors"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              responses[question.id] >= rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="mr-2 text-sm text-gray-600">
                        {responses[question.id] ? `(${responses[question.id]}/5)` : ''}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-10 text-center">
          <Button
            onClick={handleSubmit}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8"
          >
            إرسال الاستطلاع
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SurveyPreview;
