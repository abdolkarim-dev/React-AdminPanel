import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Content */}
        <div className="w-full">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Personal Information
            </h4>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Your personal information
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* First Name */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                First Name
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                Abdolkarim
              </p>
            </div>

            {/* Last Name */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Last Name
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                Bazdar
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Email Address
              </p>

              <p className="truncate text-sm font-semibold text-gray-800 dark:text-white/90">
                bazdarabdolkarim@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Phone
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                +98 917 382 6650
              </p>
            </div>

            {/* Bio */}
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Bio
              </p>

              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                I'm abdolkarim
              </p>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={openModal}
          className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.05] dark:hover:text-white lg:w-auto"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              fill=""
            />
          </svg>
          Edit
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
        <div className="relative w-full max-w-[700px] overflow-y-auto rounded-2xl bg-white p-5 dark:bg-gray-900 sm:p-6 lg:p-8">
          {/* Modal Header */}
          <div className="mb-7 border-b border-gray-100 pb-5 dark:border-gray-800">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>

            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
              Update your details to keep your profile up-to-date.
            </p>
          </div>

          <form className="flex flex-col">
            {/* Modal Content */}
            <div className="custom-scrollbar max-h-[450px] overflow-y-auto px-1">
              {/* Social Links */}
              <div>
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90">
                  Social Links
                </h5>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label>Facebook</Label>
                    <Input
                      type="text"
                      value="https://www.facebook.com"
                    />
                  </div>

                  <div>
                    <Label>X.com</Label>
                    <Input type="text" value="https://x.com" />
                  </div>

                  <div>
                    <Label>Linkedin</Label>
                    <Input
                      type="text"
                      value="https://www.linkedin.com/company"
                    />
                  </div>

                  <div>
                    <Label>Instagram</Label>
                    <Input type="text" value="https://instagram.com" />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="mt-8 border-t border-gray-100 pt-7 dark:border-gray-800">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90">
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label>First Name</Label>
                    <Input type="text" value="Abdolkarim" />
                  </div>

                  <div>
                    <Label>Last Name</Label>
                    <Input type="text" value="Bazdar" />
                  </div>

                  <div>
                    <Label>Email Address</Label>
                    <Input type="text" value="bazdarabdolkarim@gmail.com" />
                  </div>

                  <div>
                    <Label>Phone</Label>
                    <Input type="text" value="+09 363 398 46" />
                  </div>

                  <div className="sm:col-span-2">
                    <Label>Bio</Label>
                    <Input type="text" value="Team Manager" />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 flex items-center justify-end gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>

              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
