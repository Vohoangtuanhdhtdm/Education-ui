import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
  formSchema,
  type RoleFormValues,
  type RoleSelectionModalProps,
} from "@/react-hook-form/zod/role";

export function RoleSelectionModal({
  isOpen,
  onClose,
  onSubmitRole,
}: RoleSelectionModalProps) {
  const form = useForm<RoleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: undefined,
    },
  });

  // Reset form khi modal mở
  useEffect(() => {
    if (isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

  async function onSubmit(values: RoleFormValues) {
    try {
      await onSubmitRole(values.role);
      onClose();
      toast.success("Cập nhật vai trò thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật vai trò:", error);
      toast.error("Cập nhật vai trò thất bại");
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_23-2149195759.jpg?ga=GA1.1.1446194784.1750311856&semt=ais_hybrid&w=740" // Thay bằng ảnh của bạn
            alt="Welcome illustration"
            className="w-full h-48 mx-auto mb-4 object-cover"
          />
          <DialogTitle>Chào mừng bạn!</DialogTitle>
          <DialogDescription>
            Bạn là người dùng mới. Vui lòng chọn vai trò của bạn để tiếp tục.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Tôi là:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="student" />
                        </FormControl>
                        <FormLabel className="font-normal">Học sinh</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="teacher" />
                        </FormControl>
                        <FormLabel className="font-normal">Giáo viên</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Đang gửi..." : "Xác nhận"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
